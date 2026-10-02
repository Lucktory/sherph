/** A headline split so the trailing part can carry the gradient treatment. */
export type GradientHeading = {
  lead: string;
  grad: string;
};

export type HeroStat = {
  value: string;
  /**
   * Optional symbol rendered in the accent gradient right after the value
   * (+, ×, %). Leave it off and put the unit in the label instead - a word like
   * "weeks" set at the number's size reads as a typo, not a flourish.
   */
  suffix?: string;
  label: string;
};

export type ProcessStep = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
};

/** The headline figure a service cell leads with. */
export type ServiceMetric = {
  value: string;
  /** Rendered smaller, right after the value (%, ×, /100, wks). */
  unit?: string;
  caption: string;
};

/** A labelled bar in the flagship's comparison chart. */
export type ServiceComparison = {
  label: string;
  value: string;
};

export type ServiceItem = {
  title: string;
  subtitle: string;
  description: string;
  metric: ServiceMetric;
  /**
   * Two or three short supporting phrases. How they are drawn depends on the
   * cell's visual - the checklist ticks through them, everything else renders
   * them as chips.
   */
  points: string[];
  /**
   * Labels for a comparison chart, matched by index to the cell's `bars`.
   * Only the flagship uses it.
   */
  comparison?: ServiceComparison[];
};

/**
 * One thing that was in the way, and what was done about it.
 *
 * This is the part of a project entry that actually shows skill, so both halves
 * should stay short enough to scan. `problem` says what was hard; `solution`
 * names the technique - the specific thing a reader would recognise as
 * competence. Two lines each at most; if it needs a paragraph it belongs in a
 * case study, not here.
 */
export type ProjectProblem = {
  problem: string;
  solution: string;
};

export type ProjectItem = {
  title: string;
  /** Short category label shown on the image. */
  category: string;
  /** One-line blurb for the card. */
  description: string;
  /** Stack and duration, e.g. 'React · GraphQL · 6 weeks'. */
  stack: string;
  /** Headline result overlaid on the image. */
  metric: { value: string; caption: string };
  /** Year the work shipped, e.g. '2025'. Panel only. */
  year: string;
  /**
   * What I actually did here, in one line - "Built the custom Shopify theme",
   * not a description of the product. Panel only.
   */
  role: string;
  /**
   * The problems solved, in the order worth reading. Three to five is the
   * useful range: fewer looks thin, more stops being scannable.
   */
  problems: ProjectProblem[];
  /**
   * Public URL of the live site, or `null` when the client is under NDA - the
   * panel then shows `projects.panel.nda` in place of the link.
   *
   * Never put a client's private CRM, admin or staging URL here. If the work
   * cannot be shown publicly, that is exactly what `null` is for.
   */
  liveUrl: string | null;
};

export type DesignShowItem = {
  tag: string;
  title: string;
  alt: string;
};

export type Testimonial = {
  quote: string;
  /**
   * Who said it. Optional: a client who would rather not be named can supply a
   * logo instead, and the card then leads with the mark and drops this line.
   */
  name?: string;
  /** Role, company and country on one line. */
  role: string;
  /** Two letters shown in the avatar when there is no logo. */
  initials: string;
  /**
   * Path to the client's own logo under /public/clients. Falls back to
   * `initials` when absent, which is what a client under NDA gets.
   */
  logo?: string;
  /**
   * Out of five, as a string so locales can write '4,9'. Optional on purpose:
   * a star rating is a specific claim, and a client saying they are happy is
   * not the same as a client giving a number. Omit it unless they actually
   * gave one - the stars are then not rendered at all.
   */
  rating?: string;
  /** When the work was delivered, e.g. '2026'. */
  when: string;
};

/**
 * The About section is a single video rectangle and nothing else. Everything
 * that used to live here (portrait, bio, stat grid, CTA row) was removed, so
 * these three strings are all the copy it needs.
 */
export type About = {
  /** Accessible name for the video. Never drawn on screen. */
  videoLabel: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    process: string;
    services: string;
    designShow: string;
    projects: string;
    testimonials: string;
    stacks: string;
    certifications: string;
    about: string;
    cta: string;
    menuLabel: string;
    languageLabel: string;
  };
  hero: {
    tagline: string;
    heading: GradientHeading;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: HeroStat[];
  };
  process: {
    kicker: string;
    heading: GradientHeading;
    description: string;
    steps: ProcessStep[];
    guarantees: string[];
  };
  services: {
    kicker: string;
    heading: GradientHeading;
    description: string;
    items: ServiceItem[];
  };
  projects: {
    kicker: string;
    heading: GradientHeading;
    description: string;
    items: ProjectItem[];
    /** Chrome for the project detail panel that slides in from the right. */
    panel: {
      /** Accessible name of the dialog. */
      label: string;
      /** Accessible name of the button covering each card. */
      open: string;
      close: string;
      previous: string;
      next: string;
      visit: string;
      /** Shown in place of the link when `liveUrl` is null. */
      nda: string;
      yearLabel: string;
      stackLabel: string;
      resultLabel: string;
      roleLabel: string;
      problemsLabel: string;
    };
  };
  stack: {
    kicker: string;
    heading: GradientHeading;
    description: string;
    groups: {
      frontend: string;
      backend: string;
      tools: string;
    };
    hint: string;
  };
  testimonials: {
    kicker: string;
    heading: GradientHeading;
    description: string;
    items: Testimonial[];
    controls: {
      previous: string;
      next: string;
      goTo: string;
      region: string;
    };
  };
  about: About;
  designShow: {
    kicker: string;
    heading: GradientHeading;
    description: string;
    items: DesignShowItem[];
    lightbox: {
      label: string;
      close: string;
      previous: string;
      next: string;
      zoom: string;
    };
  };
};
