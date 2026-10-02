'use client';

import { ArrowUpRight, ChevronLeft, ChevronRight, Lock, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ProjectImage } from '@/content/projects';
import type { Dictionary, ProjectItem } from '@/i18n/types';
import { prefersReducedMotion } from '@/lib/gsap';
import styles from './ProjectDrawer.module.css';

type ProjectDrawerProps = {
  items: readonly ProjectItem[];
  images: readonly ProjectImage[];
  /** Index of the open project, or `null` when the drawer is closed. */
  index: number | null;
  labels: Dictionary['projects']['panel'];
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/** Everything inside the panel that can take focus, in DOM order. */
const FOCUSABLE = 'a[href], button:not([disabled])';

/**
 * Shows the host and path of a URL without the protocol - `animastore.co`
 * rather than `https://animastore.co/`. The panel mentions where the work
 * lives; it does not need to shout a full URL.
 */
function shortUrl(url: string): string {
  try {
    const u = new URL(url);
    return (u.host + u.pathname).replace(/\/$/, '').replace(/^www\./, '');
  } catch {
    return url;
  }
}

/**
 * Project detail panel, sliding in from the right.
 *
 * Deliberately NOT a centred modal: a centred box has to be short enough to fit
 * a viewport in both directions, which is what pushed the old version into one
 * long paragraph. A right-hand drawer is tall and narrow, so the content can be
 * a scannable list - path, role, then the problems solved - and the grid stays
 * visible behind it, which keeps the sense of moving through a set.
 *
 * Entirely data-driven: it renders whatever `items` contains, so adding a
 * project is adding a dictionary entry and an image, never touching this file.
 */
export function ProjectDrawer({
  items,
  images,
  index,
  labels,
  onClose,
  onNavigate,
}: ProjectDrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const isOpen = index !== null;

  // The panel has to stay mounted while it slides back out, so closing is a
  // state rather than an immediate unmount.
  const [closing, setClosing] = useState(false);

  const requestClose = useCallback(() => {
    // With animations off there is no exit to wait for, and `animationend`
    // would never fire - so close straight away rather than hanging open.
    if (prefersReducedMotion()) {
      onClose();
      return;
    }
    setClosing(true);
  }, [onClose]);

  // Safety net. The close depends on `animationend`, and the failure mode when
  // that event does not arrive is the worst one available: the panel stays
  // mounted and its scrim sits invisible over the entire page, eating every
  // click. Anything can swallow the event - a dropped frame, the tab being
  // backgrounded mid-animation, a future edit to the CSS. So the close is also
  // driven by a timer well past the 280ms exit, and whichever fires first wins.
  useEffect(() => {
    if (!closing) return;
    const id = window.setTimeout(() => {
      setClosing(false);
      onClose();
    }, 600);
    return () => window.clearTimeout(id);
  }, [closing, onClose]);

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  // Lock the page behind the panel, and hand focus in and back out again.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;

    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      // Back to the card that opened it, so a keyboard user does not land at
      // the top of the document.
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  // A different project means a different read: start it at the top.
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [index]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        requestClose();
        return;
      }
      if (event.key === 'ArrowLeft') {
        step(-1);
        return;
      }
      if (event.key === 'ArrowRight') {
        step(1);
        return;
      }
      if (event.key !== 'Tab') return;

      // Focus trap. Without it Tab walks out of the panel into the grid behind,
      // which is still rendered and still scrolled to the cards.
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, requestClose, step]);

  if (index === null) return null;

  const item = items[index];
  const image = images[index];
  if (!item || !image) return null;

  const hasSiblings = items.length > 1;

  return (
    <div
      className={`${styles.scrim} ${closing ? styles.scrimOut : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <aside
        ref={panelRef}
        className={`${styles.panel} ${closing ? styles.panelOut : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={labels.label}
        onAnimationEnd={(event) => {
          // Only the panel's own slide-out ends the close; child animations
          // bubble here too and would close it early.
          if (closing && event.target === event.currentTarget) {
            setClosing(false);
            onClose();
          }
        }}
      >
        <header className={styles.bar}>
          <span className={styles.counter}>
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>

          <div className={styles.barActions}>
            {hasSiblings ? (
              <>
                <button
                  type="button"
                  className={styles.iconBtn}
                  aria-label={labels.previous}
                  onClick={() => step(-1)}
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className={styles.iconBtn}
                  aria-label={labels.next}
                  onClick={() => step(1)}
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </>
            ) : null}
            <button
              ref={closeRef}
              type="button"
              className={styles.iconBtn}
              aria-label={labels.close}
              onClick={requestClose}
            >
              <X aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className={styles.body} ref={bodyRef}>
          <div className={styles.shot}>
            <Image
              src={image.src}
              alt={item.title}
              width={image.width}
              height={image.height}
              sizes="(max-width: 700px) 100vw, 600px"
              className={styles.img}
              priority
            />
            <span className={styles.tag}>{item.category}</span>
          </div>

          <h3 className={styles.title}>{item.title}</h3>

          {/* The site path, kept small and factual - it says where the work
              lives rather than acting as the call to action. */}
          {item.liveUrl ? (
            <a
              className={styles.path}
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl(item.liveUrl)}
              <ArrowUpRight className={styles.pathIcon} aria-hidden="true" />
            </a>
          ) : (
            <p className={styles.nda}>
              <Lock className={styles.ndaIcon} aria-hidden="true" />
              {labels.nda}
            </p>
          )}

          <div className={styles.block}>
            <h4 className={styles.blockLabel}>{labels.roleLabel}</h4>
            <p className={styles.role}>{item.role}</p>
          </div>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>{labels.yearLabel}</dt>
              <dd>{item.year}</dd>
            </div>
            <div className={styles.fact}>
              <dt>{labels.resultLabel}</dt>
              <dd className={styles.result}>
                <b>{item.metric.value}</b> {item.metric.caption}
              </dd>
            </div>
            <div className={styles.fact}>
              <dt>{labels.stackLabel}</dt>
              <dd>{item.stack}</dd>
            </div>
          </dl>

          <div className={styles.block}>
            <h4 className={styles.blockLabel}>{labels.problemsLabel}</h4>
            <ol className={styles.problems}>
              {item.problems.map((entry, i) => (
                <li className={styles.problem} key={entry.problem}>
                  <span className={styles.problemNo} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.problemText}>
                    <p className={styles.problemHead}>{entry.problem}</p>
                    <p className={styles.problemBody}>{entry.solution}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {item.liveUrl ? (
            <a
              className={styles.visit}
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.visit}
              <ArrowUpRight className={styles.visitIcon} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
