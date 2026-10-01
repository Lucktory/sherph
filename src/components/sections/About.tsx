'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ContactIcon } from '@/components/ui/ContactIcons';
import { siteConfig } from '@/config/site';
import { useDictionary } from '@/i18n/LanguageProvider';
import { gsap, hasFinePointer, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import styles from './About.module.css';

/**
 * How fast the clip runs backwards when the pointer leaves, as a multiple of
 * real time. 1 means it retreats at exactly the speed it advanced, so the frame
 * you land on is the frame you left from however long you hovered.
 */
const REWIND_RATE = 1;

export function About() {
  const { about } = useDictionary();
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const [done, setDone] = useState(false);

  const stopRewind = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const forward = useCallback(() => {
    const video = videoRef.current;
    if (!video || done) return;
    stopRewind();
    // Autoplay without a click is only permitted muted, and iOS additionally
    // needs playsInline or it takes the video fullscreen.
    video.muted = true;
    void video.play().catch(() => {
      // Blocked, or it will not decode. Either way the visitor should still be
      // able to reach the contacts rather than sit in front of a dead frame.
      setDone(true);
    });
  }, [done, stopRewind]);

  const rewind = useCallback(() => {
    const video = videoRef.current;
    if (!video || done) return;

    video.pause();
    // There is no negative playbackRate in any browser, so running backwards
    // means stepping currentTime down by hand on each frame.
    let last = performance.now();
    const step = (now: number) => {
      const current = videoRef.current;
      if (!current) return;
      const elapsed = (now - last) / 1000;
      last = now;

      const next = current.currentTime - elapsed * REWIND_RATE;
      if (next <= 0) {
        current.currentTime = 0;
        rafRef.current = null;
        return;
      }
      current.currentTime = next;
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [done]);

  // A rewind in flight when the section unmounts would keep a callback alive
  // against a detached element.
  useEffect(() => stopRewind, [stopRewind]);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const frame = section.querySelector('[data-anim="frame"]');
      if (!frame) return;

      if (prefersReducedMotion()) {
        gsap.set(frame, { opacity: 1, y: 0 });
        return;
      }

      // fromTo, never from — `from` reads its destination off the element, and
      // StrictMode's double-mounted effects make the second pass read back the
      // start value, giving a tween that runs 0 -> 0.
      gsap.fromTo(
        frame,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 74%', once: true },
        },
      );
    },
    { scope: root },
  );

  // Hover drives it on a mouse. A touch device has no hover and no way to
  // "leave", so there it plays through on a tap and never rewinds.
  const pointerProps = hasFinePointer()
    ? { onPointerEnter: forward, onPointerLeave: rewind }
    : {};

  return (
    <section id="about" ref={root} className={styles.about}>
      <div className={`wrap ${styles.content}`}>
        <div
          className={`${styles.frame} ${done ? styles.done : ''}`}
          data-anim="frame"
          {...pointerProps}
        >
          <video
            ref={videoRef}
            className={styles.video}
            src="/videos/hero.mp4"
            poster="/videos/hero-poster.jpg"
            muted
            playsInline
            preload="metadata"
            aria-label={about.videoLabel}
            onEnded={() => {
              stopRewind();
              setDone(true);
            }}
          />

          {/* No visible prompt, by request. This is still here so the video is
              reachable by keyboard and by tap, where there is no hover to use.
              Its label is read by screen readers but never drawn. */}
          {!done ? (
            <button type="button" className={styles.hit} onClick={forward}>
              <span className={styles.srOnly}>{about.videoLabel}</span>
            </button>
          ) : null}

          <div className={styles.outro} aria-hidden={!done}>
            {siteConfig.contacts.map((contact) => (
              <a
                key={contact.kind}
                className={`${styles.link} ${styles[contact.kind]}`}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
                // Not reachable by tab until the video has finished, so focus
                // never lands on something the visitor cannot see.
                tabIndex={done ? undefined : -1}
              >
                <ContactIcon kind={contact.kind} className={styles.linkIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
