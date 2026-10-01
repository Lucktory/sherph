'use client';

import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past the hero's top edge — the header uses it
 * to swap from transparent-over-video to a solid, blurred bar.
 */
export function useStickyHeader(offset = 40): boolean {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const check = () => setIsStuck(window.scrollY > offset);

    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [offset]);

  return isStuck;
}
