import type { Metadata } from 'next';
import { Archivo, Fraunces } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { siteConfig } from '@/config/site';
import { isLocale, locales, localeHtmlLang, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import '@/app/globals.css';

/**
 * Display face - the six heading tiers, the gradient stat figures, the modal
 * title. Everything at 24px and above.
 *
 * Requested as a discrete weight rather than `axes: ['opsz']`, for two reasons.
 * Google serves a true static instance for `wght@900` (measured 18,004 B latin)
 * where the two-axis opsz+wght variable is 67,304 B - 49KB for a redrawing that
 * nine rules would use. And the static lands on Fraunces' default opsz 14, the
 * TEXT cut, which is lower-contrast and sturdier than the display cut. That is
 * what `background-clip: text` needs: the shared h2 bottoms out at 34px on the
 * light panels, and display-cut hairlines there would break up a gradient.
 *
 * `next/font` cannot pin a non-weight axis to a value - `axes` takes names and
 * always requests the full range - so the discrete weight is the only way to
 * get one optical cut at one weight.
 */
const display = Fraunces({
  subsets: ['latin'],
  weight: '900',
  display: 'swap',
  variable: '--font-display',
});

/**
 * UI face - body copy, card titles, buttons, and the 19 uppercase micro-labels.
 *
 * `weight` is omitted deliberately. Google serves Archivo's variable file for
 * any requested range, so omitting it costs one 34,928 B request and yields the
 * whole 100–900 range; pinning the five weights the CSS uses as statics would
 * be roughly 67 KB. The free intermediate weights are load-bearing here - the
 * micro-labels use 750 on light panels and 700 on dark ones.
 */
const ui = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ui',
});

type LayoutParams = { params: Promise<{ lang: string }> };

/** Pre-renders one static page per language at build time. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((locale) => [localeHtmlLang[locale], `/${locale}`]),
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${lang}`,
      locale: localeHtmlLang[lang],
      type: 'website',
    },
  };
}

export default async function LocaleLayout({ params, children }: LayoutParams & { children: ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale: Locale = lang;

  return (
    <html lang={localeHtmlLang[locale]} className={`${display.variable} ${ui.variable}`}>
      <body>
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
