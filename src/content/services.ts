/** Which data visual a service cell draws in place of a bullet list. */
export type ServiceVisual = 'bars' | 'columns' | 'gauge' | 'checks' | 'palette' | 'days';

/** Small glyph shown inside a chip. Flagship only. */
export type ChipIcon = 'bolt' | 'code' | 'shield';

/**
 * Where a cell sits in the bento.
 *
 *   +-----------+--------+--------+
 *   |           |   02   |   03   |
 *   |    01     +--------+--------+
 *   |   tall    |   04   |   05   |
 *   |           +--------+--------+
 *   |           |    06  strip    |
 *   +-----------+-----------------+
 *
 * `tall` is placed explicitly at column 1 spanning all three rows; the four
 * `cell` entries auto-flow around it, and `strip` closes the bottom row. The
 * short final row is what lets the whole section fit inside one viewport.
 */
export type ServiceSpan = 'tall' | 'cell' | 'strip';

export type ServiceCell = {
  span: ServiceSpan;
  visual: ServiceVisual;
  /** `bars` / `columns`: relative lengths 0–100. The highlighted one is yours. */
  bars?: { value: number; highlight?: boolean }[];
  /** `gauge`: 0–100, how far the ring fills. */
  gauge?: number;
  /** `days`: how many cells the strip holds. */
  days?: number;
  /** Icons for the chips, matched by index to the item's `points`. */
  chipIcons?: ChipIcon[];
};

/**
 * Order here is the order on screen and drives the 01–06 numbering. It must
 * stay in step with `services.items` in every dictionary — index for index, and
 * DOM order decides where auto-placement puts each cell, so reordering one
 * without the other will break the grid.
 *
 * The flagship is the first entry. Structural numbers (bar lengths, ring fill)
 * live here; the figures a visitor reads live in the dictionaries so they can
 * be translated.
 */
export const serviceCells: readonly ServiceCell[] = [
  // 01 — Faster delivery. Two labelled bars: a typical timeline against yours.
  {
    span: 'tall',
    visual: 'bars',
    bars: [{ value: 100 }, { value: 38, highlight: true }],
    chipIcons: ['bolt', 'code', 'shield'],
  },
  // 02 — Design.
  { span: 'cell', visual: 'palette' },
  // 03 — Performance. The ring carries its own figure, so the cell's metric
  // reports load time instead and the two do not repeat each other.
  { span: 'cell', visual: 'gauge', gauge: 98 },
  // 04 — Quality.
  { span: 'cell', visual: 'checks' },
  // 05 — SEO growth.
  {
    span: 'cell',
    visual: 'columns',
    bars: [{ value: 20 }, { value: 34 }, { value: 50 }, { value: 72 }, { value: 100, highlight: true }],
  },
  // 06 — Support, in the short bottom strip.
  { span: 'strip', visual: 'days', days: 30 },
] as const;
