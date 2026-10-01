'use client';

import { useEffect, useRef, useState } from 'react';

type UseRevealOptions = {
  /** How much of the element must be visible before it animates in. */
  threshold?: number;
  /** Animate only the first time the element enters the viewport. */
  once?: boolean;
};

/**
 * Fades an element up the first time it scrolls into view.
 *
 * Returns the ref to attach and the class string to spread onto the element —
 * `reveal` is the resting (hidden) state and `in` is the settled state, both
 * defined globally so sections can compose them with their own module classes.
 */
export function useReveal<T extends HTMLElement>({ threshold = 0.12, once = true }: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Without IntersectionObserver, show the content rather than hiding it.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return {
    ref,
    isVisible,
    className: isVisible ? 'reveal in' : 'reveal',
  };
}
