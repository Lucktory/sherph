'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { LOCALE_COOKIE, localeHtmlLang, type Locale } from '@/i18n/config';
import { dictionaries } from '@/i18n/dictionaries';
import type { Dictionary } from '@/i18n/types';

type LanguageContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (next: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  /** Locale resolved on the server from the `/[lang]` route segment. */
  initialLocale: Locale;
  children: ReactNode;
};

/**
 * Holds the active locale for the whole tree.
 *
 * Switching languages is a pure state update — every dictionary is already in
 * memory, so the page re-renders in the new language within a frame. The URL and
 * the locale cookie are updated alongside it (via `replaceState`, so no
 * navigation and no scroll jump), which keeps the choice shareable and makes it
 * the default on the next visit.
 */
export function LanguageProvider({ initialLocale, children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  // Called from the toggle's click handler, so the URL and cookie writes happen
  // in an event — never inside the state updater, which React runs during render.
  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;

      const { search, hash } = window.location;
      window.history.replaceState(null, '', `/${next}${search}${hash}`);
      document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;

      setLocaleState(next);
    },
    [locale],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, dict: dictionaries[locale], setLocale }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a <LanguageProvider>.');
  }
  return context;
}

/** Shorthand for components that only need the copy. */
export function useDictionary(): Dictionary {
  return useLanguage().dict;
}
