'use client';

import { useRef } from 'react';
import { cursorEffectsEnabled, gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import styles from './InteractiveMesh.module.css';

type Tone = 'dark' | 'light';

type ToneConfig = {
  /** Colour of a dot at rest. */
  base: [number, number, number];
  baseAlpha: number;
  /** Colour a dot takes on right under the cursor. */
  accent: [number, number, number];
  accentAlpha: number;
};

const TONES: Record<Tone, ToneConfig> = {
  dark: { base: [255, 255, 255], baseAlpha: 0.1, accent: [170, 132, 255], accentAlpha: 0.95 },
  light: { base: [39, 39, 61], baseAlpha: 0.11, accent: [105, 94, 254], accentAlpha: 0.9 },
};

/** Distance between dots, px. */
const SPACING = 30;
/** Dot radius at rest, px. */
const DOT_RADIUS = 1.4;
/** How far from the cursor a dot still reacts, px. */
const INFLUENCE = 140;
/** Furthest a dot is pushed from its home position, px. */
const MAX_PUSH = 26;
/** Per-frame approach rate toward the target. Higher is snappier. */
const EASE = 0.14;

type Dot = {
  /** Home position — the dot always eases back to this. */
  ox: number;
  oy: number;
  x: number;
  y: number;
  /** Smoothed 0–1 proximity to the cursor, drives colour and size. */
  prox: number;
};

type InteractiveMeshProps = {
  /** Matches the panel it sits on. */
  tone?: Tone;
};

/**
 * A grid of dots that parts around the cursor.
 *
 * Dots within `INFLUENCE` are pushed directly away from the pointer, brightening
 * and growing as they go, then ease back home once it leaves. Drawn to a canvas
 * rather than the DOM — a section this size holds well over a thousand dots, and
 * that many elements would be far too much for the layout engine.
 *
 * Drop it as the first child of a `position: relative` section.
 */
export function InteractiveMesh({ tone = 'dark' }: InteractiveMeshProps) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const host = hostRef.current;
      const canvas = canvasRef.current;
      const section = host?.parentElement;
      if (!host || !canvas || !section || !cursorEffectsEnabled()) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const colours = TONES[tone];
      const pointer = { x: 0, y: 0, active: false };
      let dots: Dot[] = [];
      let width = 0;
      let height = 0;
      // Set while anything still needs redrawing. When the mesh is fully at rest
      // and the cursor has left, the loop draws nothing at all.
      let dirty = true;

      function build() {
        const rect = section!.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = rect.width;
        height = rect.height;
        if (width === 0 || height === 0) return;

        canvas!.width = Math.round(width * dpr);
        canvas!.height = Math.round(height * dpr);
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

        // Inset the grid by half a cell so it sits evenly inside the section.
        const cols = Math.ceil(width / SPACING);
        const rows = Math.ceil(height / SPACING);
        const offsetX = (width - (cols - 1) * SPACING) / 2;
        const offsetY = (height - (rows - 1) * SPACING) / 2;

        dots = [];
        for (let row = 0; row < rows; row += 1) {
          for (let col = 0; col < cols; col += 1) {
            const ox = offsetX + col * SPACING;
            const oy = offsetY + row * SPACING;
            dots.push({ ox, oy, x: ox, y: oy, prox: 0 });
          }
        }
        dirty = true;
      }

      function draw() {
        if (!dirty) return;

        ctx!.clearRect(0, 0, width, height);

        let moving = false;
        const [br, bg, bb] = colours.base;
        const [ar, ag, ab] = colours.accent;

        for (const dot of dots) {
          let targetX = dot.ox;
          let targetY = dot.oy;
          let prox = 0;

          if (pointer.active) {
            const dx = dot.ox - pointer.x;
            const dy = dot.oy - pointer.y;
            const distance = Math.hypot(dx, dy);

            if (distance < INFLUENCE) {
              // Squared falloff so the push is concentrated near the cursor
              // instead of nudging the whole neighbourhood evenly.
              prox = 1 - distance / INFLUENCE;
              const push = prox * prox * MAX_PUSH;
              const length = distance || 1;
              targetX = dot.ox + (dx / length) * push;
              targetY = dot.oy + (dy / length) * push;
            }
          }

          dot.x += (targetX - dot.x) * EASE;
          dot.y += (targetY - dot.y) * EASE;
          dot.prox += (prox - dot.prox) * EASE;

          if (
            Math.abs(targetX - dot.x) > 0.05 ||
            Math.abs(targetY - dot.y) > 0.05 ||
            Math.abs(prox - dot.prox) > 0.005
          ) {
            moving = true;
          }

          const t = dot.prox;
          const alpha = colours.baseAlpha + (colours.accentAlpha - colours.baseAlpha) * t;
          ctx!.fillStyle = `rgba(${Math.round(br + (ar - br) * t)}, ${Math.round(
            bg + (ag - bg) * t,
          )}, ${Math.round(bb + (ab - bb) * t)}, ${alpha})`;

          ctx!.beginPath();
          ctx!.arc(dot.x, dot.y, DOT_RADIUS * (1 + t * 1.2), 0, Math.PI * 2);
          ctx!.fill();
        }

        // One more frame is still owed after the cursor leaves, to paint the
        // dots in their settled state.
        dirty = pointer.active || moving;
      }

      const onMove = (event: PointerEvent) => {
        const rect = section.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.active = true;
        dirty = true;
      };

      const onLeave = () => {
        pointer.active = false;
        dirty = true;
      };

      build();
      gsap.ticker.add(draw);

      section.addEventListener('pointermove', onMove);
      section.addEventListener('pointerleave', onLeave);

      const resizeObserver = new ResizeObserver(build);
      resizeObserver.observe(section);

      // Stop drawing entirely while the section is off screen.
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => {
          if (self.isActive) {
            gsap.ticker.add(draw);
            dirty = true;
          } else {
            gsap.ticker.remove(draw);
          }
        },
      });

      return () => {
        gsap.ticker.remove(draw);
        trigger.kill();
        resizeObserver.disconnect();
        section.removeEventListener('pointermove', onMove);
        section.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: hostRef, dependencies: [tone] },
  );

  return (
    <span ref={hostRef} className={styles.host} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </span>
  );
}
