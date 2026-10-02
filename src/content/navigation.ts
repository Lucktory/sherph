import type { Dictionary } from '@/i18n/types';

export type NavItem = {
  /** Section element id the link scrolls to. */
  id: string;
  /** Key into `dictionary.nav`, so the label follows the active language. */
  labelKey: keyof Dictionary['nav'];
};

/**
 * Order of the header and mobile menus.
 *
 * Every entry must correspond to a section that actually renders - a link to a
 * missing id scrolls nowhere, and the scroll-spy underlines a tab nobody can
 * reach. Two entries are commented out for that reason: `certifications`, whose
 * section was never built, and `designshow`, whose section exists but is no
 * longer rendered on the page. Both keep their dictionary labels in `nav`, so
 * uncommenting the line is all either one needs.
 */
export const navItems: readonly NavItem[] = [
  { id: 'process', labelKey: 'process' },
  { id: 'services', labelKey: 'services' },
  // { id: 'designshow', labelKey: 'designShow' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'testimonials', labelKey: 'testimonials' },
  { id: 'stacks', labelKey: 'stacks' },
  // { id: 'certifications', labelKey: 'certifications' },
  { id: 'about', labelKey: 'about' },
] as const;

export const navSectionIds = navItems.map((item) => item.id);
