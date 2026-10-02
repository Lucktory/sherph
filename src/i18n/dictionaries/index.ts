import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { en } from '@/i18n/dictionaries/en';
import { es } from '@/i18n/dictionaries/es';
import { pt } from '@/i18n/dictionaries/pt';

/**
 * All three dictionaries ship to the client together. They hold plain text only,
 * so the cost is small - and keeping them in memory is what lets the header
 * toggle switch the whole page instantly: no navigation, no fetch, no flash of
 * the previous language.
 */
export const dictionaries: Record<Locale, Dictionary> = { en, es, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
