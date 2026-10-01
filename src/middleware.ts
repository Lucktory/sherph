import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, isLocale, locales, matchLocale } from '@/i18n/config';

/**
 * Every page lives under a locale segment (`/en`, `/es`, `/pt`). Requests that
 * arrive without one are sent to the visitor's own language: their last explicit
 * choice if they made one, otherwise the best match for `Accept-Language`.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const alreadyLocalised = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (alreadyLocalised) return NextResponse.next();

  const stored = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(stored) ? stored : matchLocale(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and anything that looks like a static file.
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
