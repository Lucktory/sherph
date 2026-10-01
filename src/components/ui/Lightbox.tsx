'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './Lightbox.module.css';

export type LightboxItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

type LightboxLabels = {
  label: string;
  close: string;
  previous: string;
  next: string;
};

type LightboxProps = {
  items: readonly LightboxItem[];
  /** Index of the open item, or `null` when the lightbox is closed. */
  index: number | null;
  labels: LightboxLabels;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/**
 * Full-screen image viewer. Closes on Escape or a backdrop click, and steps
 * through the set with the arrow keys or the on-screen buttons.
 */
export function Lightbox({ items, index, labels, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  // Lock the page behind the overlay, and hand focus to the dialog / back again.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;

    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + items.length) % items.length);
      } else if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % items.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, items.length, onClose, onNavigate]);

  if (index === null) return null;

  const item = items[index];
  if (!item) return null;

  const hasSiblings = items.length > 1;

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={labels.label}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button ref={closeRef} type="button" className={styles.close} aria-label={labels.close} onClick={onClose}>
        &times;
      </button>

      {hasSiblings ? (
        <>
          <button
            type="button"
            className={styles.prev}
            aria-label={labels.previous}
            onClick={() => onNavigate((index - 1 + items.length) % items.length)}
          >
            &larr;
          </button>
          <button
            type="button"
            className={styles.next}
            aria-label={labels.next}
            onClick={() => onNavigate((index + 1) % items.length)}
          >
            &rarr;
          </button>
        </>
      ) : null}

      <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="92vw" priority />

      <span className={styles.caption}>{item.caption}</span>
    </div>
  );
}
