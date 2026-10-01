'use client';

import { useRef } from 'react';
import type { ComponentType } from 'react';
import { FlowGradientDefs, processIcons } from '@/components/icons/ProcessIcons';
import { InteractiveMesh } from '@/components/ui/InteractiveMesh';
import { useMagneticTilt } from '@/hooks/useMagneticTilt';
import { useDictionary } from '@/i18n/LanguageProvider';
import type { ProcessStep } from '@/i18n/types';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '@/lib/gsap';
import styles from './Process.module.css';

type StepProps = {
  step: ProcessStep;
  index: number;
  Icon?: ComponentType;
};

function Step({ step, index, Icon }: StepProps) {
  // The tile leans toward the cursor and publishes its position as --mx/--my,
  // which the CSS uses to put a glow under the pointer.
  const tiltRef = useMagneticTilt<HTMLDivElement>({ maxTilt: 10, lift: 8, scale: 1 });

  return (
    <div className={styles.fstep}>
      <div className={styles.ficWrap}>
        <div ref={tiltRef} className={styles.fic} data-anim="tile">
          {Icon ? <Icon /> : null}
          <span className={styles.fno} data-anim="badge">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
      <h3 data-anim="copy">{step.title}</h3>
      <div className={styles.fsub} data-anim="copy">
        {step.subtitle}
      </div>
      <p data-anim="copy">{step.description}</p>
      <span className={styles.fdur} data-anim="copy">
        {step.badge}
      </span>
    </div>
  );
}

export function Process() {
  const { process } = useDictionary();
  const root = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const beamRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const heads = q('[data-anim="head"]');
      const tiles = q('[data-anim="tile"]');
      const badges = q('[data-anim="badge"]');
      const copy = q('[data-anim="copy"]');
      const strokes = q('[data-anim="tile"] svg path, [data-anim="tile"] svg circle');
      const rail = railRef.current;
      const beam = beamRef.current;

      // Nothing moves, but everything must still end up in its final state.
      if (prefersReducedMotion()) {
        gsap.set([heads, tiles, badges, copy], { opacity: 1, y: 0, scale: 1 });
        gsap.set(strokes, { strokeDashoffset: 0 });
        if (rail) gsap.set(rail, { scaleX: 1 });
        if (beam) gsap.set(beam, { opacity: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
        defaults: { ease: 'power3.out' },
      });

      // fromTo everywhere, never from: `from` infers its destination by reading
      // the element's current value, and under StrictMode's double-mounted
      // effects that reads back the start value the first pass left behind —
      // giving a tween that runs 0 -> 0 and never reveals anything.
      //
      // Negative offsets overlap the steps so the section reads as one motion
      // rather than six queued animations.
      tl.fromTo(
        heads,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      )
        .fromTo(rail, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, '-=0.35')
        .fromTo(
          tiles,
          { opacity: 0, scale: 0.68 },
          { opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(1.7)', stagger: 0.14 },
          '-=0.95',
        )
        .fromTo(
          strokes,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut', stagger: 0.03 },
          '-=0.55',
        )
        .fromTo(
          badges,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.14 },
          '-=0.9',
        )
        .fromTo(
          copy,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.045 },
          '-=0.85',
        );

      // The beam sweeping the rail. Function-based values so a resize re-reads
      // the width instead of animating to a stale pixel target.
      if (rail && beam) {
        const sweep = gsap.fromTo(
          beam,
          { x: () => -beam.offsetWidth },
          {
            x: () => rail.offsetWidth,
            duration: 2.3,
            ease: 'power1.inOut',
            repeat: -1,
            repeatDelay: 1.1,
            delay: 1.6,
            paused: true,
          },
        );

        // Idle while the section is off screen — no point burning frames on it.
        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => (self.isActive ? sweep.play() : sweep.pause()),
          invalidateOnRefresh: true,
        });
      }
    },
    { scope: root },
  );

  return (
    <>
      <FlowGradientDefs />

      <section id="process" ref={root} className={`light ${styles.process}`}>
        <InteractiveMesh tone="light" />

        <div className={`wrap ${styles.content}`}>
          <div className={styles.head} data-anim="head">
            <span className="kicker">{process.kicker}</span>
            <h2 className="h2">
              {process.heading.lead} <span className="grad">{process.heading.grad}</span>
            </h2>
            <p className="sub">{process.description}</p>
          </div>

          <div className={styles.flow}>
            <span className={styles.railWrap} aria-hidden="true">
              <span ref={railRef} className={styles.rail} />
              <span ref={beamRef} className={styles.beam} />
            </span>

            {process.steps.map((step, index) => (
              <Step key={step.title} step={step} index={index} Icon={processIcons[index]} />
            ))}
          </div>

          <div className={styles.flowNote} data-anim="head">
            {process.guarantees.map((guarantee) => (
              <span className={styles.fn} key={guarantee}>
                <i aria-hidden="true">&#10003;</i> {guarantee}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
