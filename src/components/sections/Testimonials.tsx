'use client';

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { InteractiveMesh } from '@/components/ui/InteractiveMesh';
import { useDictionary } from '@/i18n/LanguageProvider';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import styles from './Testimonials.module.css';

/** How long a card holds before the carousel advances on its own. */
const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const { testimonials } = useDictionary();
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = testimonials.items.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  // Autoplay, suspended while the pointer or keyboard focus is on the carousel
  // and switched off entirely for reduced-motion users.
  useEffect(() => {
    if (paused || count < 2 || prefersReducedMotion()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  // The cards are absolutely stacked, so the track has no height of its own.
  // Size it to the tallest card, or a long testimonial is silently clipped by
  // the stage's overflow. Re-measured on resize and whenever the copy changes,
  // since a language switch changes every quote's length.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children).filter((c) => c instanceof HTMLElement);
    const measure = () => {
      const tallest = cards.reduce((max, c) => Math.max(max, c.offsetHeight), 0);
      track.style.height = tallest ? `${tallest}px` : '';
    };

    measure();
    const observer = new ResizeObserver(measure);
    cards.forEach((c) => observer.observe(c));
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [testimonials.items]);

  // Language switches can shorten the list; keep the index in range.
  useEffect(() => {
    setIndex((i) => (i < count ? i : 0));
  }, [count]);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const head = q('[data-anim="head"]');
      const stage = q('[data-anim="stage"]');

      if (prefersReducedMotion()) {
        gsap.set([head, stage], { opacity: 1, y: 0 });
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
        .fromTo(stage, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.45');
    },
    { scope: root },
  );

  /** Which slot a card occupies: the centre, either shoulder, or out of play. */
  const slotOf = (i: number) => {
    if (i === index) return styles.isCentre;
    if (i === (index - 1 + count) % count) return styles.isLeft;
    if (i === (index + 1) % count) return styles.isRight;
    return styles.isOff;
  };

  return (
    <section id="testimonials" ref={root} className={`light ${styles.testimonials}`}>
      <InteractiveMesh tone="light" />

      <div className={`wrap ${styles.content}`}>
        <div className={styles.head} data-anim="head">
          <span className="kicker">{testimonials.kicker}</span>
          <h2 className="h2">
            {testimonials.heading.lead} <span className="grad">{testimonials.heading.grad}</span>
          </h2>
          <p className="sub">{testimonials.description}</p>
        </div>

        <div
          className={styles.stage}
          data-anim="stage"
          role="group"
          aria-roledescription="carousel"
          aria-label={testimonials.controls.region}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') go(index - 1);
            if (event.key === 'ArrowRight') go(index + 1);
          }}
        >
          <div ref={trackRef} className={styles.track} aria-live="polite">
            {testimonials.items.map((item, i) => (
              <article
                key={item.quote}
                className={`${styles.card} ${slotOf(i)}`}
                aria-hidden={i === index ? undefined : true}
                // Shoulder cards are decorative; keep them off the tab order.
                inert={i === index ? undefined : true}
              >
                <Quote className={styles.quoteMark} aria-hidden="true" />

                {/* Stars only when the client actually gave a number — see the
                    note on `rating` in i18n/types.ts. */}
                <div className={styles.meta}>
                  {item.rating ? (
                    <span className={styles.stars} aria-label={`${item.rating} / 5`}>
                      {Array.from({ length: 5 }, (_, s) => (
                        <Star key={s} className={styles.star} aria-hidden="true" />
                      ))}
                      <b>{item.rating}</b>
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className={styles.when}>{item.when}</span>
                </div>

                <p className={styles.quote}>{item.quote}</p>

                <footer className={styles.author}>
                  {/* Three shapes here. A named client with a logo gets the
                      square tile beside their name. A client who would rather
                      not be named gets the mark on its own, set wide, standing
                      in for the name. Anyone with neither falls back to
                      initials. */}
                  {item.logo && !item.name ? (
                    <span className={styles.wordmark}>
                      <Image src={item.logo} alt={item.role} width={937} height={489} />
                    </span>
                  ) : (
                    <span
                      className={item.logo ? styles.avatarLogo : styles.avatar}
                      aria-hidden="true"
                    >
                      {item.logo ? (
                        <Image src={item.logo} alt="" width={180} height={180} />
                      ) : (
                        item.initials
                      )}
                    </span>
                  )}

                  <span className={styles.who}>
                    {item.name ? <b>{item.name}</b> : null}
                    <span>{item.role}</span>
                  </span>
                </footer>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            aria-label={testimonials.controls.previous}
            onClick={() => go(index - 1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label={testimonials.controls.next}
            onClick={() => go(index + 1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.items.map((item, i) => (
            <button
              key={item.quote}
              type="button"
              className={i === index ? styles.dotOn : styles.dot}
              aria-label={`${testimonials.controls.goTo} ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
