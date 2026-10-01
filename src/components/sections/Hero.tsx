'use client';

import { useRef } from 'react';
import { ContactLink } from '@/components/ui/ContactLink';
import { useAutoplayVideo } from '@/hooks/useVideoPlayback';
import { useDictionary } from '@/i18n/LanguageProvider';
import styles from './Hero.module.css';

export function Hero() {
  const { hero } = useDictionary();
  const videoRef = useRef<HTMLVideoElement>(null);

  useAutoplayVideo(videoRef);

  return (
    <section className={styles.hero} id="top">
      <div className={styles.vhero}>
        <video ref={videoRef} autoPlay muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
          <source src="/videos/hero-720.mp4" type="video/mp4" />
        </video>
        <div className={styles.shade} />

        <div className={styles.content}>
          <span className={styles.tagpill}>{hero.tagline}</span>
          <h1>
            {hero.heading.lead} <span className="grad">{hero.heading.grad}</span>
          </h1>
          <p>{hero.description}</p>
          <div className={styles.ctas}>
            <ContactLink className="btn btn-accent">{hero.primaryCta}</ContactLink>
            <a className="btn btn-line" href="#projects">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.hsGrid}>
            {hero.stats.map((stat) => (
              <div className={styles.hs} key={stat.label}>
                <b>
                  {stat.value}
                  {stat.suffix ? <span className="grad">{stat.suffix}</span> : null}
                </b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
