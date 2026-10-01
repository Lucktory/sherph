'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { ProjectDrawer } from '@/components/ui/ProjectDrawer';
import { projectImages, type ProjectImage } from '@/content/projects';
import { useMagneticTilt } from '@/hooks/useMagneticTilt';
import { useDictionary } from '@/i18n/LanguageProvider';
import type { ProjectItem } from '@/i18n/types';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap';
import styles from './Projects.module.css';

function ProjectCard({
  item,
  image,
  openLabel,
  onOpen,
}: {
  item: ProjectItem;
  image: ProjectImage;
  openLabel: string;
  onOpen: () => void;
}) {
  const tiltRef = useMagneticTilt<HTMLElement>({ maxTilt: 4, lift: 6, scale: 1.01 });

  return (
    <article ref={tiltRef} className={styles.card} data-anim="card">
      {/* The lit top edge, matching the services cards. */}
      <span className={styles.edge} aria-hidden="true" />

      {/*
        One transparent button covering the whole card, rather than a link on
        the title: the entire card is the target, and this keeps it to a single
        tab stop with a name that says which project it opens. The card's own
        text stays outside the button so screen readers still read it as
        content rather than as part of the control's name.
      */}
      <button
        type="button"
        className={styles.hit}
        aria-label={`${item.title} — ${openLabel}`}
        onClick={onOpen}
      />

      <div className={styles.shot}>
        <Image
          src={image.src}
          alt={item.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className={styles.img}
        />
        {/* Darkens the lower half so the tag and metric stay readable over any
            screenshot, however bright it happens to be. */}
        <span className={styles.shade} aria-hidden="true" />

        <span className={styles.tag}>{item.category}</span>

        <div className={styles.metric}>
          <b>{item.metric.value}</b>
          <span>{item.metric.caption}</span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.description}</p>
        <span className={styles.meta}>{item.stack}</span>
      </div>
    </article>
  );
}

export function Projects() {
  const { projects } = useDictionary();
  const root = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      const q = gsap.utils.selector(section);
      const head = q('[data-anim="head"]');
      const cards = q('[data-anim="card"]');

      if (prefersReducedMotion()) {
        gsap.set([head, cards], { opacity: 1, y: 0 });
        return;
      }

      // fromTo, never from — `from` reads its destination off the element, and
      // StrictMode's double-mounted effects make the second pass read back the
      // start value, giving a tween that runs 0 -> 0.
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

      gsap.fromTo(
        cards,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: {
            trigger: q('[data-anim="grid"]')[0] ?? section,
            start: 'top 85%',
            once: true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section id="projects" ref={root} className={styles.projects}>
      <div className={`wrap ${styles.content}`}>
        <div className={styles.head} data-anim="head">
          <span className="kicker">{projects.kicker}</span>
          <h2 className="h2">
            {projects.heading.lead} <span className="grad">{projects.heading.grad}</span>
          </h2>
          <p className="sub">{projects.description}</p>
        </div>

        <div className={styles.grid} data-anim="grid">
          {projects.items.map((item, index) => {
            const image = projectImages[index];
            if (!image) return null;
            return (
              <ProjectCard
                key={item.title}
                item={item}
                image={image}
                openLabel={projects.panel.open}
                onOpen={() => setOpenIndex(index)}
              />
            );
          })}
        </div>
      </div>

      <ProjectDrawer
        items={projects.items}
        images={projectImages}
        index={openIndex}
        labels={projects.panel}
        onClose={close}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
