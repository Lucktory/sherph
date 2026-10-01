'use client';

import Image from 'next/image';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Lightbox, type LightboxItem } from '@/components/ui/Lightbox';
import { designShowImages } from '@/content/designShow';
import { useReveal } from '@/hooks/useReveal';
import { useVideoInView } from '@/hooks/useVideoPlayback';
import { useDictionary } from '@/i18n/LanguageProvider';
import type { DesignShowItem } from '@/i18n/types';
import styles from './DesignShow.module.css';

type DesignCardProps = {
  item: DesignShowItem;
  image: (typeof designShowImages)[number];
  zoomLabel: string;
  priority: boolean;
  onOpen: () => void;
};

function DesignCard({ item, image, zoomLabel, priority, onOpen }: DesignCardProps) {
  const { ref, className } = useReveal<HTMLButtonElement>();

  return (
    <button ref={ref} type="button" className={`${className} ${styles.card}`} onClick={onOpen} title={zoomLabel}>
      <span className={styles.imgWrap}>
        <Image
          src={image.src}
          alt={item.alt}
          fill
          sizes="(max-width: 880px) 100vw, 1520px"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
        />
      </span>
      <span className={styles.cap}>
        <span className={styles.k}>{item.tag}</span>
        <span className={styles.t}>{item.title}</span>
      </span>
      <span className={styles.zoom} aria-hidden="true">
        ⤢
      </span>
    </button>
  );
}

export function DesignShow() {
  const { designShow } = useDictionary();
  const head = useReveal<HTMLDivElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useVideoInView(videoRef, sectionRef);

  const lightboxItems = useMemo<LightboxItem[]>(
    () =>
      designShowImages.map((image, index) => {
        const item = designShow.items[index];
        return {
          src: image.src,
          width: image.width,
          height: image.height,
          alt: item?.alt ?? '',
          caption: item?.title ?? '',
        };
      }),
    [designShow.items],
  );

  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  return (
    <section id="designshow" ref={sectionRef} className={styles.designShow}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.vwrap}>
          <video ref={videoRef} muted loop playsInline preload="none" tabIndex={-1}>
            <source src="/videos/fancy-background.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="wrap">
        <div ref={head.ref} className={head.className}>
          <span className="kicker">{designShow.kicker}</span>
          <h2 className="h2">
            {designShow.heading.lead} <span className="grad">{designShow.heading.grad}</span>
          </h2>
          <p className="sub">{designShow.description}</p>
        </div>

        <div className={styles.stack}>
          {designShowImages.map((image, index) => {
            const item = designShow.items[index];
            if (!item) return null;

            return (
              <DesignCard
                key={image.src}
                item={item}
                image={image}
                zoomLabel={designShow.lightbox.zoom}
                priority={index === 0}
                onOpen={() => setOpenIndex(index)}
              />
            );
          })}
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        index={openIndex}
        labels={designShow.lightbox}
        onClose={closeLightbox}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
