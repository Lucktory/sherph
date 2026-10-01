import type { ReactNode } from 'react';

/**
 * Shared gradient the flow icons stroke themselves with. It must be present in
 * the document for `stroke: url(#flowgrad)` to resolve, so the Process section
 * renders it once, hidden, above the diagram.
 */
export function FlowGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
{/*
          userSpaceOnUse, not the default objectBoundingBox: a perfectly
          horizontal or vertical stroke has a zero-height or zero-width bounding
          box, and a bounding-box gradient on one of those is degenerate — the
          element simply is not painted. That silently erased the equator line
          of the globe icon. Coordinates match the 24-unit viewBox every icon
          here uses, which also gives each icon one gradient across the whole
          glyph instead of a separate one per path.
        */}
        <linearGradient
          id="flowgrad"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
        >
          <stop offset="0" stopColor="#695efe" />
          <stop offset="1" stopColor="#ff6af8" />
        </linearGradient>

        {/* The gauge ring lives in a 120-unit viewBox, so it needs its own. */}
        <linearGradient
          id="flowgradRing"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="120"
          y2="120"
        >
          <stop offset="0" stopColor="#695efe" />
          <stop offset="1" stopColor="#ff6af8" />
        </linearGradient>

      </defs>
    </svg>
  );
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

/**
 * `pathLength={1}` rescales every shape to a length of 1 regardless of its real
 * geometry, so a single `stroke-dasharray: 1 / stroke-dashoffset: 1` pair draws
 * all of them at the same rate. Without it, the long outline of one icon and the
 * short tick of another would draw at wildly different speeds.
 */
const draw = { pathLength: 1 } as const;

/** Pen tool — the design step. */
function DesignIcon() {
  return (
    <Icon>
      <path {...draw} d="M12 19l7-7 3 3-7 7-3-3z" />
      <path {...draw} d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <circle {...draw} cx="11" cy="11" r="2" />
    </Icon>
  );
}

/** Rocket — the MVP step. */
function MvpIcon() {
  return (
    <Icon>
      <path {...draw} d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path {...draw} d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path {...draw} d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path {...draw} d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </Icon>
  );
}

/** Layers — building out the full requirement list. */
function RequirementsIcon() {
  return (
    <Icon>
      <path {...draw} d="M12 2L2 7l10 5 10-5-10-5z" />
      <path {...draw} d="M2 17l10 5 10-5" />
      <path {...draw} d="M2 12l10 5 10-5" />
    </Icon>
  );
}

/** Shield with a check — QA and launch. */
function LaunchIcon() {
  return (
    <Icon>
      <path {...draw} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path {...draw} d="M9 12l2 2 4-4" />
    </Icon>
  );
}

/** One icon per process step, in display order. */
export const processIcons = [DesignIcon, MvpIcon, RequirementsIcon, LaunchIcon] as const;
