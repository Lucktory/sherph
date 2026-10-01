'use client';

import { locales, localeLabels, localeHtmlLang } from '@/i18n/config';
import { useLanguage } from '@/i18n/LanguageProvider';
import styles from './LanguageToggle.module.css';

type LanguageToggleProps = {
  /** True while the header is solid, so the border can drop to the normal token. */
  solid?: boolean;
  label: string;
};

export function LanguageToggle({ solid = false, label }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`${styles.langTog}${solid ? ` ${styles.solid}` : ''}`}
      role="group"
      aria-label={label}
    >
      {locales.map((value) => (
        <button
          key={value}
          type="button"
          lang={localeHtmlLang[value]}
          aria-pressed={value === locale}
          className={value === locale ? styles.active : undefined}
          onClick={() => setLocale(value)}
        >
          {localeLabels[value]}
        </button>
      ))}
    </div>
  );
}
