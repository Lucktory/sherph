export type DesignShowImage = {
  src: string;
  width: number;
  height: number;
};

/**
 * Source files for the Design Show stack, in display order. Captions and tags
 * are translated, so they live in the dictionaries and are matched to these by
 * index — keep the two lists the same length.
 */
export const designShowImages: readonly DesignShowImage[] = [
  { src: '/design-show/0.webp', width: 1920, height: 1080 },
  { src: '/design-show/1.webp', width: 1600, height: 900 },
  { src: '/design-show/2.png', width: 1920, height: 911 },
  { src: '/design-show/3.webp', width: 1200, height: 675 },
  { src: '/design-show/4.webp', width: 1200, height: 675 },
  { src: '/design-show/5.webp', width: 1600, height: 900 },
] as const;
