export const locales = ['en', 'es', 'pt'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Remembers the visitor's last explicit choice so `/` can honour it server-side. */
export const LOCALE_COOKIE = 'locale';

/** Label shown inside the header language toggle. */
export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  pt: 'PT',
};

/** BCP-47 tags used for <html lang> and hreflang alternates. */
export const localeHtmlLang: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Picks the best supported locale out of an Accept-Language header. */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag: tag.trim().toLowerCase(), q: q ? Number.parseFloat(q.split('=')[1]) : 1 };
    })
    .filter((entry) => entry.tag.length > 0 && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}
