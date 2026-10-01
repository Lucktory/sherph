'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';

function tryPlay(video: HTMLVideoElement) {
  video.preload = 'auto';
  video.muted = true;
  // Autoplay can still be refused (data saver, reduced motion, low power mode).
  // The poster/backdrop stays visible in that case, so the rejection is harmless.
  void video.play().catch(() => undefined);
}

/** Starts a muted background video as soon as the page has finished loading. */
export function useAutoplayVideo(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (document.readyState === 'complete') {
      tryPlay(video);
      return;
    }

    const start = () => tryPlay(video);
    window.addEventListener('load', start);
    return () => window.removeEventListener('load', start);
  }, [ref]);
}

/**
 * Plays a background video only while its section is on screen, and pauses it
 * the moment it scrolls away — it keeps a heavy file from decoding needlessly.
 */
export function useVideoInView(
  videoRef: RefObject<HTMLVideoElement | null>,
  sectionRef: RefObject<HTMLElement | null>,
  threshold = 0.05,
) {
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            tryPlay(video);
          } else {
            video.pause();
          }
        }
      },
      { threshold },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [videoRef, sectionRef, threshold]);
}
