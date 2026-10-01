'use client';

import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { rowDirection, rowDuration, stackGroups, type StackGroup } from '@/content/stack';
import { useDictionary } from '@/i18n/LanguageProvider';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '@/lib/gsap';
import styles from './Stack.module.css';

/** How much scroll velocity can speed a row up, as a multiple of its rest speed. */
const MAX_BOOST = 5;
/** Velocity (px/s) that maps to the full boost. */
const VELOCITY_SCALE = 700;

function MarqueeRow({ group, label, index }: { group: StackGroup; label: string; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const row = rowRef.current;
      const track = trackRef.current;
      if (!row || !track || prefersReducedMotion()) return;

      const direction = rowDirection(index);
      const duration = rowDuration(index);

      // The track holds the icon set twice, so travelling exactly 50% of its
      // width lands on an identical frame and the loop is seamless.
      const loop = gsap.fromTo(
        track,
        { xPercent: direction === -1 ? 0 : -50 },
        {
          xPercent: direction === -1 ? -50 : 0,
          duration,
          ease: 'none',
          repeat: -1,
        },
      );

      // Rather than tweening timeScale (which fights itself when scroll events
      // arrive faster than tweens finish), keep a target and ease toward it on
      // the ticker. Scroll spikes the target; it decays back on its own.
      let target = 1;
      let hovered = false;

      const tick = () => {
        const rest = hovered ? 0 : 1;
        target += (rest - target) * 0.05;
        loop.timeScale(loop.timeScale() + (target - loop.timeScale()) * 0.12);
      };
      gsap.ticker.add(tick);

      const trigger = ScrollTrigger.create({
        trigger: row,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / VELOCITY_SCALE, MAX_BOOST);
          if (boost > target) target = boost;
        },
        // Nothing to animate while the row is off screen.
        onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
      });

      const onEnter = () => {
        hovered = true;
      };
      const onLeave = () => {
        hovered = false;
      };
      row.addEventListener('pointerenter', onEnter);
      row.addEventListener('pointerleave', onLeave);

      return () => {
        gsap.ticker.remove(tick);
        trigger.kill();
        loop.kill();
        row.removeEventListener('pointerenter', onEnter);
        row.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: rowRef },
  );

  // Two passes of the same set. The second is decorative — screen readers and
  // the tab order only ever see the first.
  const passes = [0, 1];

  return (
    <div className={styles.row} ref={rowRef} data-anim="row">
      <span className={styles.rowLabel}>{label}</span>

      <div className={styles.viewport}>
        <div className={styles.track} ref={trackRef}>
          {passes.map((pass) => (
            <div className={styles.set} key={pass} aria-hidden={pass === 1 ? true : undefined}>
              {group.items.map((tech) => (
                <span
                  className={styles.tile}
                  key={tech.name}
                  style={{ '--brand': tech.color } as CSSProperties}
                >
                  <tech.Icon className={styles.logo} />
                  <span className={styles.name}>{tech.name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Stack() {
  const { stack } = useDictionary();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const head = q('[data-anim="head"]');
      const rows = q('[data-anim="row"]');

      if (prefersReducedMotion()) {
        gsap.set([head, rows], { opacity: 1, y: 0 });
        return;
      }

      // fromTo, never from — `from` reads its destination off the element, and
      // StrictMode's double-mounted effects make the second pass read back the
      // start value, giving a tween that runs 0 -> 0.
      gsap
        .timeline({
          scrollTrigger: { trigger: section, start: 'top 76%', once: true },
          defaults: { ease: 'power3.out' },
        })
        .fromTo(head, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          rows,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 },
          '-=0.4',
        );
    },
    { scope: root },
  );

  return (
    <section id="stacks" ref={root} className={styles.stack}>
      <span className={styles.grid} aria-hidden="true" />

      <div className={`wrap ${styles.content}`}>
        <div className={styles.head} data-anim="head">
          <span className="kicker">{stack.kicker}</span>
          <h2 className="h2">
            {stack.heading.lead} <span className="grad">{stack.heading.grad}</span>
          </h2>
          <p className="sub">{stack.description}</p>
        </div>

        <div className={styles.rows}>
          {stackGroups.map((group, index) => (
            <MarqueeRow
              key={group.labelKey}
              group={group}
              label={stack.groups[group.labelKey]}
              index={index}
            />
          ))}
        </div>

        <p className={styles.hint} data-anim="head">
          {stack.hint}
        </p>
      </div>
    </section>
  );
}
