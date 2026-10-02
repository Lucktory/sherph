'use client';

import { useRef } from 'react';
import { InteractiveMesh } from '@/components/ui/InteractiveMesh';
import { serviceCells, type ServiceCell } from '@/content/services';
import { useMagneticTilt } from '@/hooks/useMagneticTilt';
import { useDictionary } from '@/i18n/LanguageProvider';
import type { ServiceItem } from '@/i18n/types';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import { ChipGlyph, ServiceVisual } from './ServiceVisuals';
import styles from './Services.module.css';

type CardProps = {
  item: ServiceItem;
  cell: ServiceCell;
  index: number;
};

function ServiceCard({ item, cell, index }: CardProps) {
  // Gentle: these are large surfaces, and a big panel rotating far reads as a
  // gimmick rather than as weight.
  const tiltRef = useMagneticTilt<HTMLElement>({ maxTilt: 3.5, lift: 5, scale: 1.008 });

  const isTall = cell.span === 'tall';
  const hasChips = isTall && item.points.length > 0;

  return (
    <article ref={tiltRef} className={`${styles.card} ${styles[cell.span]}`} data-anim="card">
      {/* The lit top edge: a hairline plus the bloom that sits above it. */}
      <span className={styles.edge} aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.text}>
          {/* Grouped so the card can push this block to the top and the metric
              to the bottom, filling the height instead of clustering mid-card. */}
          <div className={styles.textTop}>
            <span className={styles.idx}>{String(index + 1).padStart(2, '0')}</span>
            <span className={styles.kind}>{item.subtitle}</span>
            <h3 className={styles.title}>{item.title}</h3>
            {isTall ? <p className={styles.desc}>{item.description}</p> : null}
          </div>

          <div className={styles.metric}>
            <b>
              {item.metric.value}
              {item.metric.unit ? <span className={styles.unit}>{item.metric.unit}</span> : null}
            </b>
            <span>{item.metric.caption}</span>
          </div>
        </div>

        <div className={styles.viz}>
          <ServiceVisual cell={cell} points={item.points} comparison={item.comparison} />
        </div>
      </div>

      {hasChips ? (
        <ul className={styles.chips}>
          {item.points.map((point, chipIndex) => {
            const icon = cell.chipIcons?.[chipIndex];
            return (
              <li key={point}>
                {icon ? <ChipGlyph icon={icon} /> : null}
                {point}
              </li>
            );
          })}
        </ul>
      ) : null}
    </article>
  );
}

export function Services() {
  const { services } = useDictionary();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const head = q('[data-anim="head"]');
      const cards = q('[data-anim="card"]');
      const bars = q('[data-viz="bar"]');
      const columns = q('[data-viz="column"]');
      const gauges = q('[data-viz="gauge"]');
      const checks = q('[data-viz="check"]');
      const swatches = q('[data-viz="swatch"]');
      const days = q('[data-viz="day"]');

      // Each visual's resting value comes from its own data-target, so one tween
      // can drive a whole set that all finish at different lengths.
      const target = (_i: number, el: Element) => Number((el as HTMLElement).dataset.target ?? 1);
      const gaugeTarget = (_i: number, el: Element) =>
        1 - Number((el as HTMLElement).dataset.target ?? 1);

      if (prefersReducedMotion()) {
        gsap.set([head, cards, checks, swatches, days], { opacity: 1, x: 0, y: 0, scale: 1 });
        gsap.set(bars, { scaleX: target });
        gsap.set(columns, { scaleY: target });
        gsap.set(gauges, { strokeDashoffset: gaugeTarget });
        return;
      }

      gsap.fromTo(
        head,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
        },
      );

      // fromTo, never from - `from` reads its destination off the element, and
      // StrictMode's double-mounted effects make the second pass read back the
      // start value, giving a tween that runs 0 -> 0.
      const tl = gsap.timeline({
        scrollTrigger: { trigger: q('[data-anim="grid"]')[0] ?? section, start: 'top 85%', once: true },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(cards, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.06 })
        .fromTo(bars, { scaleX: 0 }, { scaleX: target, duration: 0.85, ease: 'power2.out', stagger: 0.07 }, '-=0.3')
        .fromTo(
          columns,
          { scaleY: 0 },
          { scaleY: target, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.06 },
          '-=0.7',
        )
        .fromTo(
          gauges,
          { strokeDashoffset: 1 },
          { strokeDashoffset: gaugeTarget, duration: 1.1, ease: 'power2.inOut' },
          '-=0.8',
        )
        .fromTo(checks, { opacity: 0, x: -8 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.08 }, '-=0.95')
        .fromTo(
          swatches,
          { opacity: 0, scale: 0.4 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.05 },
          '-=0.85',
        )
        .fromTo(days, { opacity: 0, scaleY: 0.3 }, { opacity: 1, scaleY: 1, duration: 0.3, stagger: 0.01 }, '-=0.75');
    },
    { scope: root },
  );

  return (
    <section id="services" ref={root} className={styles.services}>
      <InteractiveMesh tone="dark" />

      <div className={`wrap ${styles.content}`}>
        <div className={styles.head} data-anim="head">
          <h2 className="h2">
            {services.heading.lead} <span className="grad">{services.heading.grad}</span>
          </h2>
        </div>

        <div className={styles.bento} data-anim="grid">
          {services.items.map((item, index) => {
            const cell = serviceCells[index];
            if (!cell) return null;
            return <ServiceCard key={item.title} item={item} cell={cell} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
