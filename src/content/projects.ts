export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

/**
 * Source files for the projects grid, in display order. Titles, copy and
 * metrics are translated, so they live in the dictionaries and are matched to
 * these by index — keep the two lists the same length.
 */
export const projectImages: readonly ProjectImage[] = [
  // Every one of these is a real screenshot of real, shipped work at 1440x900 —
  // exactly the 16/10 the grid renders, so nothing is cropped. No mockups left.
  // Adding a project means a screenshot at that size here plus one entry in each
  // of the three dictionaries; the order must match.
  //
  // ipc.png is the one that is not a public website: it is a crop of an internal
  // agency dashboard, taken from the left so the "Top propietarios" panel — which
  // listed identifiable client names against revenue — falls outside the frame.
  // Do not re-crop it wider without checking what that puts back on screen.
  { src: '/projects/ipc.png', width: 1440, height: 900 },
  { src: '/projects/anima.png', width: 1440, height: 900 },
  { src: '/projects/ryokan.png', width: 1440, height: 900 },
  { src: '/projects/lesillage.png', width: 1440, height: 900 },
  { src: '/projects/casapeluda.png', width: 1440, height: 900 },
  { src: '/projects/velaris.png', width: 1440, height: 900 },
  { src: '/projects/liberta.png', width: 1440, height: 900 },
  { src: '/projects/aguadulce.png', width: 1440, height: 900 },
] as const;
