import { Code2, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';
import type { ChipIcon, ServiceCell } from '@/content/services';
import type { ServiceComparison } from '@/i18n/types';
import styles from './ServiceVisuals.module.css';

/**
 * The data visuals that stand in for bullet lists in the services bento.
 *
 * None of them animate themselves. Each animatable part carries a `data-viz`
 * attribute and, where it needs one, a `data-target`; the section's GSAP
 * timeline in Services.tsx drives them all, so the whole section stays a single
 * piece of choreography rather than six independent ones.
 */

/** Horizontal bars with a label on the left and the figure on the right. */
function Bars({
  bars,
  comparison,
}: {
  bars: NonNullable<ServiceCell['bars']>;
  comparison?: ServiceComparison[];
}) {
  return (
    <div className={styles.bars}>
      {bars.map((bar, index) => {
        const label = comparison?.[index];
        return (
          <div className={styles.barRow} key={index}>
            {label ? <span className={styles.barLabel}>{label.label}</span> : null}
            <span className={styles.barTrack} aria-hidden="true">
              <span
                className={styles.barFill}
                data-viz="bar"
                data-target={bar.value / 100}
                data-highlight={bar.highlight ? 'true' : undefined}
              />
            </span>
            {label ? <span className={styles.barValue}>{label.value}</span> : null}
          </div>
        );
      })}
    </div>
  );
}

/** Vertical ascending columns — growth over time. */
function Columns({ bars }: { bars: NonNullable<ServiceCell['bars']> }) {
  return (
    <div className={styles.columns} aria-hidden="true">
      {bars.map((bar, index) => (
        <span className={styles.columnTrack} key={index}>
          <span
            className={styles.columnFill}
            data-viz="column"
            data-target={bar.value / 100}
            data-highlight={bar.highlight ? 'true' : undefined}
          />
        </span>
      ))}
    </div>
  );
}

function Gauge({ value }: { value: number }) {
  return (
    <div className={styles.gaugeWrap} aria-hidden="true">
      <svg viewBox="0 0 120 120" className={styles.gauge} focusable="false">
        {/* Rotated so the ring starts at twelve o'clock. pathLength={1} makes the
            dash maths independent of the circle's real circumference. */}
        <g transform="rotate(-90 60 60)">
          <circle className={styles.gaugeTrack} cx="60" cy="60" r="50" pathLength={1} />
          <circle
            className={styles.gaugeFill}
            cx="60"
            cy="60"
            r="50"
            pathLength={1}
            data-viz="gauge"
            data-target={value / 100}
          />
        </g>
      </svg>
      <span className={styles.gaugeCentre}>
        <b>{value}%</b>
      </span>
    </div>
  );
}

function Checks({ points }: { points: string[] }) {
  return (
    <ul className={styles.checks}>
      {points.map((point) => (
        <li className={styles.check} key={point} data-viz="check">
          <span className={styles.tick} aria-hidden="true">
            &#10003;
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}

const SWATCHES = ['#695efe', '#8881fe', '#a05dfd', '#ff6af8'];
const TYPE_LINES = [1, 0.72, 0.44];

function Palette() {
  return (
    <div className={styles.palette} aria-hidden="true">
      <div className={styles.swatches}>
        {SWATCHES.map((colour) => (
          <span className={styles.swatch} key={colour} data-viz="swatch" style={{ background: colour }} />
        ))}
      </div>
      <div className={styles.typeScale}>
        {TYPE_LINES.map((width, index) => (
          <span className={styles.typeLine} key={index} data-viz="bar" data-target={width} />
        ))}
      </div>
    </div>
  );
}

function Days({ count }: { count: number }) {
  return (
    <div className={styles.days} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span className={styles.day} key={index} data-viz="day" />
      ))}
    </div>
  );
}

/**
 * Small glyphs for the flagship's chips, mapped to Lucide icons so they sit on
 * the same 24px grid and stroke weight as the rest of the icon set.
 */
const CHIP_ICONS: Record<ChipIcon, LucideIcon> = {
  bolt: Zap,
  code: Code2,
  shield: ShieldCheck,
};

export function ChipGlyph({ icon }: { icon: ChipIcon }) {
  const Glyph = CHIP_ICONS[icon];
  return <Glyph className={styles.chipGlyph} aria-hidden="true" />;
}

export function ServiceVisual({
  cell,
  points,
  comparison,
}: {
  cell: ServiceCell;
  points: string[];
  comparison?: ServiceComparison[];
}) {
  switch (cell.visual) {
    case 'bars':
      return cell.bars ? <Bars bars={cell.bars} comparison={comparison} /> : null;
    case 'columns':
      return cell.bars ? <Columns bars={cell.bars} /> : null;
    case 'gauge':
      return typeof cell.gauge === 'number' ? <Gauge value={cell.gauge} /> : null;
    case 'checks':
      return <Checks points={points} />;
    case 'palette':
      return <Palette />;
    case 'days':
      return <Days count={cell.days ?? 30} />;
    default:
      return null;
  }
}
