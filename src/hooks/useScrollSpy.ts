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

      /* The last section can run out of page before it runs out of threshold.
         About sits at the very bottom, so once you have scrolled as far as the
         document goes its top may still be hundreds of pixels below the header:
         333px on a 1100px-tall window, 497px on a phone. The loop above then
         never picks it and the About tab can never light up, which is worse the
         smaller the screen. If we are at the bottom, the last section is the one
         you are looking at, whatever its top edge says.

         The 2px slack absorbs the fractional scroll heights that zoom, a pinned
         scrollbar, or a device pixel ratio other than 1 leave behind. */
      const scrolledToBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (scrolledToBottom && sectionIds.length > 0) {
        current = sectionIds[sectionIds.length - 1];
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
