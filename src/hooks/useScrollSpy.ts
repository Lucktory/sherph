'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently under the header, so the matching nav
 * link can be highlighted. Mirrors the reference behaviour: the last section
 * whose top edge has passed the header wins.
 */
export function useScrollSpy(sectionIds: readonly string[], offset = 140): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const check = () => {
      let current = '';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveId(current);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [sectionIds, offset]);

  return activeId;
}
