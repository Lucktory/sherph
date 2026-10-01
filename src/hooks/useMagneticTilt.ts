'use client';

import { useRef } from 'react';
import { cursorEffectsEnabled, gsap, useGSAP } from '@/lib/gsap';

type MagneticTiltOptions = {
  /** Maximum rotation in degrees at the card's edge. */
  maxTilt?: number;
  /** How far the card rises toward the cursor, in pixels. */
  lift?: number;
  /** Scale applied while hovered. 1 disables it. */
  scale?: number;
};

/**
 * Tilts an element toward the cursor and tracks where the cursor sits on it.
 *
 * Alongside the rotation it writes `--mx` / `--my` (0–100%) onto the element, so
 * CSS can position a glow at the cursor without any further JS.
 *
 * GSAP owns the element's `transform` while this is active, so the element must
 * not also carry a `transform` in a CSS `:hover` rule — the inline style GSAP
 * writes would win and the CSS rule would silently stop applying.
 */
export function useMagneticTilt<T extends HTMLElement>({
  maxTilt = 7,
  lift = 6,
  scale = 1.015,
}: MagneticTiltOptions = {}) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !cursorEffectsEnabled()) return;

      const rotateX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' });
      const rotateY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' });

      let box = el.getBoundingClientRect();
      const remeasure = () => {
        box = el.getBoundingClientRect();
      };

      const onMove = (event: PointerEvent) => {
        const px = (event.clientX - box.left) / box.width;
        const py = (event.clientY - box.top) / box.height;

        // -0.5..0.5 from the centre, so the sign flips either side of it.
        rotateY((px - 0.5) * maxTilt * 2);
        rotateX(-(py - 0.5) * maxTilt * 2);

        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
      };

      const onEnter = () => {
        remeasure();
        gsap.to(el, { y: -lift, scale, duration: 0.45, ease: 'power3.out' });
      };

      const onLeave = () => {
        rotateX(0);
        rotateY(0);
        gsap.to(el, { y: 0, scale: 1, duration: 0.55, ease: 'power3.out' });
      };

      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerenter', onEnter);
      el.addEventListener('pointerleave', onLeave);
      window.addEventListener('scroll', remeasure, { passive: true });
      window.addEventListener('resize', remeasure);

      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerenter', onEnter);
        el.removeEventListener('pointerleave', onLeave);
        window.removeEventListener('scroll', remeasure);
        window.removeEventListener('resize', remeasure);
      };
    },
    { scope: ref },
  );

  return ref;
}
