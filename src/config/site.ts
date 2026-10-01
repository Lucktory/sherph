export type ContactKind = 'whatsapp' | 'telegram';

export type Contact = {
  kind: ContactKind;
  label: string;
  href: string;
};

/**
 * Single place for non-translated, project-wide constants.
 */
export const siteConfig = {
  /**
   * Handle shown in the header logo, deliberately not a real name. The logo appends a gradient full stop after
   * it, so leave the trailing period off here. "sherpa" renders as "sherpa."
   *
   * Lowercase is load-bearing: nobody writes their legal name that way, so the
   * lowercase single word plus the alias chip beside it tell a visitor this is a
   * handle before they read a word of copy.
   */
  brand: 'sherpa',
  /**
   * Where every "Let's Talk" / "Start a Project" button points. Set to WhatsApp;
   * swap for the Telegram href below if you would rather lead with that.
   */
  contactUrl: 'https://wa.me/13802133507',
  /** Shown as a row of links in the About section. */
  contacts: [
    // wa.me needs the number with no +, spaces or dashes.
    { kind: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/13802133507' },
    { kind: 'telegram', label: 'Telegram', href: 'https://t.me/lucktory_dev' },
  ] as const satisfies readonly Contact[],
  /** Canonical origin, used for metadata + hreflang alternates. */
  url: 'https://example.com',
} as const;

/** External links get `target="_blank"`; anchors and mailto: must not. */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
