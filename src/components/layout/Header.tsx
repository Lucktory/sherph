'use client';

import { useState } from 'react';
import { ContactLink } from '@/components/ui/ContactLink';
import { siteConfig } from '@/config/site';
import { navItems, navSectionIds } from '@/content/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useStickyHeader } from '@/hooks/useStickyHeader';
import { useDictionary } from '@/i18n/LanguageProvider';
import { LanguageToggle } from './LanguageToggle';
import styles from './Header.module.css';

export function Header() {
  const dict = useDictionary();
  const isStuck = useStickyHeader();
  const activeId = useScrollSpy(navSectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headClassName = [styles.siteHead, isStuck ? styles.stuck : '', isMenuOpen ? styles.open : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headClassName}>
      <div className={`wrap ${styles.bar}`}>
        {/* The chip sits outside the anchor on purpose: it labels the wordmark,
            it is not part of the link text, and a screen reader announcing
            "sherpa. alias, link" would be wrong. "alias" is left untranslated
            because it is the same word in English, Spanish and Portuguese. */}
        <span className={styles.brand}>
          <a className={styles.logo} href="#top">
            {siteConfig.brand}
            <span className="grad">.</span>
          </a>
          <span className={styles.alias}>alias</span>
        </span>

        <nav className={styles.navLinks} aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? styles.active : undefined}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {dict.nav[item.labelKey]}
            </a>
          ))}
        </nav>

        <LanguageToggle solid={isStuck || isMenuOpen} label={dict.nav.languageLabel} />

        <div className={styles.headCta}>
          <ContactLink className="btn btn-accent">{dict.nav.cta}</ContactLink>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={dict.nav.menuLabel}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      <nav className={styles.mobileNav} aria-label="Mobile">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
            {dict.nav[item.labelKey]} <span className={styles.go}>&rarr;</span>
          </a>
        ))}
        <ContactLink onClick={() => setIsMenuOpen(false)}>
          {dict.nav.cta} <span className={styles.go}>&rarr;</span>
        </ContactLink>
      </nav>
    </header>
  );
}
