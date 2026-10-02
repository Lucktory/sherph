'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registering here, once, keeps every consumer from having to remember to do it.
// `useGSAP` is registered alongside the plugins so GSAP can hook its cleanup.
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Handy when a scroll-driven animation misbehaves: inspect ScrollTrigger.getAll()
// from the console to see each trigger's element, start/end and whether it fired.
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  Object.assign(window, { __gsap: gsap, __ScrollTrigger: ScrollTrigger });
}

export { gsap, ScrollTrigger, useGSAP };

/** True when the visitor has asked the OS to minimise animation. */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * True for a real pointing device. Cursor-driven effects are pointless on touch
 * - and worse than pointless, since a tap would leave them stuck mid-state.
 */
export function hasFinePointer(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

/** Cursor effects need both: a real pointer, and permission to move things. */
export function cursorEffectsEnabled(): boolean {
  return hasFinePointer() && !prefersReducedMotion();
}
