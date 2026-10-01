import type { Dictionary } from '@/i18n/types';

export const en: Dictionary = {
  meta: {
    title: 'sherpa · Web Portfolio',
    description:
      'Senior full-stack web developer — UI/UX design, web development, SaaS platforms, e-commerce. From idea to live.',
  },
  nav: {
    services: 'Services',
    projects: 'Projects',
    testimonials: 'Client Testimonial',
    stacks: 'Technology Stacks',
    certifications: 'Certifications',
    about: 'About Me',
    cta: "Let's Talk",
    menuLabel: 'Menu',
    languageLabel: 'Language',
  },
  // CONFIRM BEFORE LAUNCH: every number below is a placeholder shaped to fit the
  // layout. Replace each with something you can back up on a sales call.
  hero: {
    tagline: 'Full-stack · Web, Mobile & AI',
    heading: { lead: 'From first call to', grad: 'live in 6 weeks.' },
    description:
      'I design, build and ship the whole product — and you see a working demo every Friday.',
    primaryCta: "See how I'd build yours",
    secondaryCta: 'View the work',
    stats: [
      { value: '6', label: 'Weeks to First Demo' },
      { value: '60', suffix: '+', label: 'Products Shipped' },
      { value: '4.9', label: 'Average Client Rating' },
      { value: '30', label: 'Days of Free Support' },
    ],
  },
  process: {
    kicker: 'My Process',
    heading: { lead: 'From idea to live,', grad: 'step by step.' },
    description:
      'You always know exactly where your project stands — a clear four-step flow with demos and approvals at every stage. No black box, no surprises.',
    steps: [
      {
        title: 'Design',
        subtitle: 'Wireframes → Figma',
        description: 'Every screen designed and approved by you before a single line of code is written.',
        badge: 'You approve each screen',
      },
      {
        title: 'Build MVP First',
        subtitle: 'Core product, live early',
        description: 'A working MVP in weeks — you test it with real users while changes are still cheap.',
        badge: 'Live demo in weeks',
      },
      {
        title: 'Implement Full Requirements',
        subtitle: 'Feature by feature',
        description:
          'The complete requirement list, built iteratively with weekly demos and your feedback each sprint.',
        badge: 'Weekly demos',
      },
      {
        title: 'Test & Publish',
        subtitle: 'QA → deploy → live',
        description:
          'Automated + manual QA across all cases, then deployment, monitoring — your product goes live.',
        badge: '+1 month free support',
      },
    ],
    guarantees: [
      'Milestones & payments fully protected',
      'Weekly progress you can see',
      'Free support for 1 month after launch',
    ],
  },
  services: {
    kicker: 'Services',
    heading: { lead: 'Design. Build. Test.', grad: 'Launch.' },
    description:
      'One senior engineer, end-to-end delivery. Every project runs from idea to live — designed beautifully, engineered carefully, and supported after launch.',
    // CONFIRM BEFORE LAUNCH: every figure in these metrics is a placeholder.
    // Replace each with something you can back up on a sales call.
    items: [
      {
        title: '2.5× Faster Delivery',
        subtitle: 'Speed without shortcuts',
        description:
          'Proven workflows and battle-tested components mean your product goes live in weeks, not quarters.',
        metric: { value: '6', unit: 'wks', caption: 'From first call to live' },
        points: ['Lean process', 'Clean code', 'Reliable'],
        comparison: [
          { label: 'Traditional', value: '16 wks' },
          { label: 'My process', value: '6 wks' },
        ],
      },
      {
        title: 'Wonderful Design',
        subtitle: 'UI/UX design',
        description:
          'Beautiful, intuitive interfaces designed around your users — every screen crafted to engage and convert.',
        metric: { value: '100', unit: '%', caption: 'Approved before code' },
        points: ['Web & mobile', 'Figma design systems', 'Built to convert'],
      },
      {
        title: 'Lightning Fast Load Times',
        subtitle: 'Performance',
        description:
          'Fast load times, smooth interactions, and stability under load — engineered for a flawless experience.',
        metric: { value: '1.2', unit: 's', caption: 'Average load time' },
        points: ['Optimised APIs', 'Responsive everywhere'],
      },
      {
        title: 'Every Feature Tested',
        subtitle: 'Quality assurance',
        description:
          'Every feature is tested across all cases before release — automated tests, edge cases, and real-device QA.',
        metric: { value: '100', unit: '%', caption: 'Test coverage' },
        points: ['Unit & E2E tests', 'Cross-browser QA', 'Code review'],
      },
      {
        title: 'Built for What\'s Next',
        subtitle: 'Growth',
        description:
          'Beautiful and fast means nothing if no one finds it. I build sites that rank and keep ranking.',
        metric: { value: '3.4', unit: '×', caption: 'Organic traffic in 6 months' },
        points: ['Technical SEO', 'Schema & metadata', 'Keyword strategy'],
      },
      {
        title: 'Free 1-Month Support',
        subtitle: 'After launch',
        description:
          'Launch is the beginning, not the end. One month of free support — fixes, tweaks, and guidance included.',
        metric: { value: '30', unit: 'days', caption: 'Free support after launch' },
        points: ['Bug fixes at no cost', 'Monitoring set up', 'Handover docs'],
      },
    ],
  },
  /* ============================================================
     All eight projects here are real, shipped work. Nothing is scaffolding.

     Seven are public websites, written from what each site verifiably does.
     IPC Analyze is an internal agency system with no public address, so its
     liveUrl is null and the panel shows the non-disclosure statement instead.

     STILL NEEDS SHERPA: the "role" and "problems" fields are his own words on
     IPC Analyze, and the role is confirmed on ANIMA. On the other six they were
     inferred from what each site does. Correct them — the problems are the part
     that actually shows skill, and they are the one thing a website cannot
     tell you.

     Adding a project: a 1440x900 screenshot in public/projects, one line in
     content/projects.ts, and one entry here in each of the three dictionaries.
     The order of the images and the items must match.
     ============================================================ */
  projects: {
    kicker: 'Projects',
    heading: { lead: 'Work I have', grad: 'shipped.' },
    description: 'Designed, built, tested and launched end to end.',
    panel: {
      label: 'Project details',
      open: 'View details',
      close: 'Close',
      previous: 'Previous project',
      next: 'Next project',
      visit: 'Visit live site',
      nda: 'Under a non-disclosure agreement, so this one cannot be linked publicly. Happy to walk through it on a call.',
      yearLabel: 'Delivered',
      stackLabel: 'Built with',
      resultLabel: 'Result',
      roleLabel: 'My role',
      problemsLabel: 'Problems solved',
    },
    items: [
      // Sherpa's own words, transcribed from the entry he supplied — the role and
      // all four problems are his, not inferred from a website. The only open
      // questions are the project name (taken from the watermark in the
      // screenshot) and whether there is a public URL.
      {
        title: 'IPC Analyze',
        category: 'Platform',
        description:
          'Property-management system for an Argentine agency — IPC-indexed rent, owner settlements, stamp tax and arrears across 98 live contracts.',
        stack: 'Next.js · Supabase · Argentina',
        metric: { value: '98', caption: 'Live contracts' },
        year: '2026',
        liveUrl: null,
        role: 'Built the system, end to end.',
        problems: [
          {
            problem: 'Rent in Argentina isn’t a number, it’s a formula.',
            solution: 'Contracts adjust by accumulated IPC on their own cadence, so the system stores an anchor and projects the live value forward — and says so on screen when the two disagree.',
          },
          {
            problem: 'Some of the money an agency handles belongs to nobody in it.',
            solution: 'Stamp tax is collected half from each side and paid on to the municipality. Modelled as dates rather than transactions, so it can never be credited to the owner or charged commission.',
          },
          {
            problem: 'A tenant who pays late breaks a month you already closed.',
            solution: 'A payment records in the month it arrived but can name the older month it settles, so the bank balance and the commission stay put while the old debt still clears.',
          },
          {
            problem: 'Debt the system can’t prove is worse than showing none.',
            solution: 'Months before a contract’s first recorded movement are never counted as owed, so the office never chases a balance the software invented.',
          },
        ],
      },
      // REAL PROJECT. Scope confirmed by Sherpa: he built the custom THEME.
      // CONFIRM THE PROBLEMS — they were inferred from what the live storefront
      // does, not from Sherpa, so they describe the result accurately but may
      // not be the problems he actually set out to solve.
      {
        title: 'ANIMA',
        category: 'E-commerce',
        description:
          'Custom Shopify theme for a Colombian athleisure label — built around colour variants, COP pricing and Addi instalments.',
        stack: 'Shopify · Liquid · JavaScript · Colombia',
        metric: { value: '24 h', caption: 'Bogotá delivery' },
        year: '2025',
        liveUrl: 'https://animastore.co',
        role: 'Built the custom Shopify theme — storefront, sections and product templates.',
        problems: [
          {
            problem: 'A stock theme shows one image per product, so colourways stayed hidden until the product page.',
            solution: 'Wrote a product card that reads variant data directly, putting every colourway on the grid.',
          },
          {
            problem: 'One long catalogue buried what customers had actually come for.',
            solution: 'Split the range into garment-type collections — sets, tops, leggings, jumpsuits, dresses, jackets — so the nav matches how people shop.',
          },
          {
            problem: 'Limited-reference promotions needed urgency the merchant could run without a developer.',
            solution: 'Built a countdown promotion bar driven by theme settings, so dates and copy are editable from the admin.',
          },
          {
            problem: 'Colombian shoppers decide on local payment terms, not at the checkout screen.',
            solution: 'Surfaced COP pricing and Addi instalments on the storefront itself, ahead of the basket.',
          },
          {
            problem: 'A free-shipping threshold only changes an order if it is known before checkout.',
            solution: 'Put the threshold and the delivery promise in the announcement bar, where they can still move the basket.',
          },
        ],
      },
      {
        title: 'Ryokanbook',
        category: 'Booking',
        description:
          'Trilingual booking platform for onsen ryokan and regional stays across Japan, with curated local experiences.',
        stack: 'WordPress · PHP · Multilingual · Japan',
        metric: { value: '3', caption: 'Languages' },
        year: '2025',
        liveUrl: 'https://ryokan-book.com',
        role: 'Built the trilingual site and its region and theme discovery.',
        problems: [
          {
            problem: 'Someone visiting Japan for the first time cannot name the ryokan they want, so a search box is useless to them.',
            solution: 'Made discovery browse-first — by region and by travel theme — and left keyword search as the fallback rather than the entry point.',
          },
          {
            problem: 'The audience is Japanese, English-speaking and Traditional Chinese at the same time.',
            solution: 'Shipped all three languages from one WordPress install, with the switch reachable from every page.',
          },
          {
            problem: 'Lesser-known inns have no brand recognition to trade on.',
            solution: 'Gave each property editorial treatment — regional context, journal pieces and trip themes — instead of a listings row.',
          },
          {
            problem: 'For an overseas guest the practical details decide the booking, not the photography.',
            solution: 'Tagged every stay with the facets that actually matter — English spoken, reachable without a car, free parking — and made them filterable.',
          },
        ],
      },
      {
        title: 'LE SILLAGE',
        category: 'E-commerce',
        description:
          'Kyoto niche-fragrance shop on Shopify — brand-first navigation across 86 collections, with multi-currency for overseas buyers.',
        stack: 'Shopify · Liquid · Klaviyo · Japan',
        metric: { value: '86', caption: 'Collections' },
        year: '2025',
        liveUrl: 'https://lesillage-kyoto.shop',
        role: 'Built the custom Shopify theme.',
        problems: [
          {
            problem: 'Niche fragrance is bought by house, not by product name.',
            solution: 'Built brand-first navigation, giving every stocked house its own collection and its own way in.',
          },
          {
            problem: 'Nobody can smell a perfume through a screen.',
            solution: 'Made scent blotters a sellable product, released against the shop’s scheduled Instagram Live sessions.',
          },
          {
            problem: 'Fragrance demand is seasonal, and a blog post does not sell anything.',
            solution: 'Turned the seasonal edits into merchandisable collections — summer scents, choose-by-season — rather than editorial.',
          },
          {
            problem: 'The shop sells well beyond Kyoto.',
            solution: 'Added a country and region selector with prices converting into the visitor’s own currency.',
          },
        ],
      },
      {
        title: 'Casa Peluda',
        category: 'E-commerce',
        description:
          'Argentine pet-shop catalogue on WooCommerce — 278 products faceted by animal, category and brand, with checkout handed to Mercado Libre.',
        stack: 'WordPress · WooCommerce · PHP · Argentina',
        metric: { value: '278', caption: 'Products' },
        year: '2025',
        liveUrl: 'https://casapeluda.com.ar',
        role: 'Built the WooCommerce catalogue and the Mercado Libre hand-off.',
        problems: [
          {
            problem: 'Argentine shoppers trust Mercado Libre with their card far more than an unfamiliar shop.',
            solution: 'Kept discovery on our own catalogue and handed checkout to Mercado Libre, so the store never has to win a payment-trust argument.',
          },
          {
            problem: 'A 278-product catalogue is unusable without structure.',
            solution: 'Built faceted navigation by animal, category and brand, with a live count on every facet.',
          },
          {
            problem: 'A lot of pet-shop visits are gift-shaped rather than product-shaped.',
            solution: 'Added a gift finder that routes by who it is for instead of by SKU.',
          },
          {
            problem: 'A price-led catalogue has nothing to rank on.',
            solution: 'Added a care blog — seasonal shedding, mixed feeding — to pull the search traffic product pages never will.',
          },
        ],
      },
      {
        title: 'Velaris',
        category: 'Platform',
        description:
          'Travel operating system for South America — one live supply graph that hotels, advisors and trip leaders all book from.',
        stack: 'Next.js · Turbopack · Tailwind · South America',
        metric: { value: '3', caption: 'Audience tracks' },
        year: '2025',
        liveUrl: 'https://www.velaris.travel',
        role: 'Built the product site.',
        problems: [
          {
            problem: 'One product has to sell to three audiences that want opposite things from it.',
            solution: 'Gave hotels, advisors and trip leaders their own track and their own argument, all off one shared product story.',
          },
          {
            problem: 'A supply network is an abstraction until someone can see it.',
            solution: 'Built the supply graph as a diagram on the page, so “every supplier, one inventory” lands in a glance instead of a paragraph.',
          },
          {
            problem: 'The product sells a pilot conversation, not a signup button.',
            solution: 'Made a single call to action carry the whole site and shaped every page to arrive at it.',
          },
          {
            problem: 'A new category has to be explained before it can be sold.',
            solution: 'Added a blog split into destinations, industry and opinion, so the category argument gets built alongside the product.',
          },
        ],
      },
      {
        title: 'Liberta Perfume',
        category: 'E-commerce',
        description:
          'Made-to-order Japanese perfumery on Shopify — bespoke blending, an online scent diagnosis and in-store booking in one storefront.',
        stack: 'Shopify · Liquid · GSAP · Japan',
        metric: { value: '1:1', caption: 'Bespoke blending' },
        year: '2025',
        liveUrl: 'https://liberta-perfume.com',
        role: 'Built the custom Shopify theme.',
        problems: [
          {
            problem: 'A bespoke perfume cannot be added to a cart like a bottle off a shelf.',
            solution: 'Built the full-order service as a bookable flow rather than a product page, so the sale opens with a conversation.',
          },
          {
            problem: 'Customers do not know what they like until they have smelled something.',
            solution: 'Added an online scent diagnosis that hands people a starting point instead of an undifferentiated grid.',
          },
          {
            problem: 'One storefront has to carry bespoke, ready-to-wear and personal collections at once.',
            solution: 'Separated Full Order, Prêt-à-Porter and Personal Collection so three very different ways of buying stop colliding.',
          },
          {
            problem: 'For this brand the argument is the product.',
            solution: 'Gave the manifesto — the democratisation of scent — a place in the storefront instead of burying it in an About page.',
          },
        ],
      },
      {
        title: 'Aguadulce',
        category: 'E-commerce',
        description:
          'Guatemalan concept store on Shopify — 24 Latin American designers, bilingual, with WhatsApp carrying the end of the sale.',
        stack: 'Shopify · View Transitions · Web Components · Guatemala',
        metric: { value: '24', caption: 'Designers' },
        year: '2025',
        liveUrl: 'https://aguadulcegt.com',
        role: 'Built the Shopify storefront, plus the SEO pass and WhatsApp tracking.',
        problems: [
          {
            problem: 'A multi-designer concept store gets browsed by designer as often as by garment.',
            solution: 'Built both routes off the same catalogue — 24 designer collections alongside the category grid.',
          },
          {
            problem: 'In Guatemala the sale usually finishes on WhatsApp, where it becomes invisible.',
            solution: 'Added WhatsApp tracking, so conversations that start on the site can be attributed instead of disappearing.',
          },
          {
            problem: 'A boutique with no search presence is entirely dependent on Instagram.',
            solution: 'Ran an SEO pass across the collection and product templates so the catalogue can be found on its own.',
          },
          {
            problem: 'The shop sells in quetzales but its audience is regional.',
            solution: 'Shipped it bilingual with multi-currency, so a visitor outside Guatemala still sees a price they understand.',
          },
        ],
      },
    ],
  },
  // CONFIRM BEFORE LAUNCH: this is placeholder copy. The whole point of this
  // CONFIRM BEFORE LAUNCH: the copy and figures below are placeholders. This is
  // ============================================================
  // PLACEHOLDER TESTIMONIALS — DO NOT SHIP.
  //
  // Unlike the placeholder numbers elsewhere, these are attributed
  // endorsements. Publishing them would be inventing reviews from people who
  // never said any of it. Replace every quote, name and role with something a
  // real client actually wrote, or delete the section until you have some.
  //
  // The companies below are the same fictional names used in the projects
  // grid, so it is obvious they are one placeholder set.
  stack: {
    kicker: 'Technology Stacks',
    heading: { lead: 'Tools I ship', grad: 'with.' },
    description:
      'A modern, production-proven stack — the right technology for each product, front to back.',
    groups: { frontend: 'Front-end', backend: 'Back-end', tools: 'Tools & Cloud' },
    hint: 'Hover to pause',
  },
  // ============================================================
  testimonials: {
    kicker: 'Testimonials',
    heading: { lead: 'What clients', grad: 'say.' },
    description: 'A few words from the people I built these for.',
    items: [
      {
        quote:
          'We used to track the IPC adjustments and the arrears across spreadsheets, and every month-end meant going through the whole thing by hand again. Now the system works out what each contract should be charging and flags anything that does not line up. We have stopped chasing money nobody actually owed. He understood how an agency works before he wrote any code.',
        role: 'Property agency · Argentina',
        initials: 'AL',
        logo: '/clients/ipc.png',
        when: '2026',
      },
      {
        quote:
          'Our old theme only showed one photo per product, so nobody saw the colours until they clicked in. Sherpa rebuilt the store around the way we actually sell. Every colour shows on the grid now, the collections are split by garment, and the Addi instalments sit right there before the cart.',
        name: 'ANIMA',
        role: 'Athleisure · Colombia',
        initials: 'AN',
        logo: '/clients/anima.png',
        when: '2025',
      },
      {
        quote:
          'People coming to Japan for the first time do not know a single inn by name, so a search box was never going to help them. Letting them start from a region or a kind of trip means the smaller ryokan get seen. All three languages run off one site without any fuss.',
        name: 'Ryokanbook',
        role: 'Travel booking · Japan',
        initials: 'RB',
        logo: '/clients/ryokanbook.png',
        when: '2025',
      },
      {
        quote:
          'People choose perfume by house, but our old site could only be browsed by product name. Giving each house its own way in made it far easier for customers to find what they were after. Selling blotters online solved the thing we could never get around, which is that you cannot smell anything through a screen.',
        name: 'LE SILLAGE',
        role: 'Niche fragrance · Kyoto',
        initials: 'LS',
        logo: '/clients/lesillage.png',
        when: '2025',
      },
      {
        quote:
          'With nearly 300 products the catalogue was impossible to get through without filters that actually worked. Now you can browse by animal, by category or by brand. Checkout goes through Mercado Libre, which is where people here are comfortable putting in a card, and that saved us an argument we were never going to win.',
        name: 'Casa Peluda',
        role: 'Pet shop · Argentina',
        initials: 'CP',
        logo: '/clients/casapeluda.png',
        when: '2025',
      },
      {
        quote:
          'We are selling a category most people have not heard of, to three audiences who want completely different things from it. Sherpa gave hotels, advisors and trip leaders each their own pitch without splitting the product into three stories. He also turned the supplier network into something you can see on the page instead of a paragraph asking you to picture it.',
        name: 'Velaris',
        role: 'Travel platform · South America',
        initials: 'VL',
        logo: '/clients/velaris.png',
        when: '2025',
      },
      {
        quote:
          'A made-to-order perfume is not something you drop in a cart and pay for. Building the full-order service as a booking flow let us keep what it really is, which is a conversation with the customer. The scent quiz gives people a way in when they have not worked out what they like yet.',
        name: 'Liberta Perfume',
        role: 'Bespoke perfumery · Japan',
        initials: 'LP',
        logo: '/clients/liberta.png',
        when: '2025',
      },
      {
        quote:
          'We carry 24 designers, and our customers look by designer about as often as they look by garment. Sherpa built both ways through the same catalogue so neither one felt like an afterthought. He also made the WhatsApp side measurable, and that is where the sale actually closes here.',
        name: 'Aguadulce',
        role: 'Concept store · Guatemala',
        initials: 'AG',
        logo: '/clients/aguadulce.png',
        when: '2025',
      },
    ],
    controls: {
      previous: 'Previous testimonial',
      next: 'Next testimonial',
      goTo: 'Go to testimonial',
      region: 'Client testimonials',
    },
  },
  // the one section whose whole value is that it is actually you.
  about: {
    videoLabel: 'A short introduction',
  },
  designShow: {
    kicker: 'Design Show',
    heading: { lead: 'Designs that make users', grad: 'stare.' },
    description: "Real interfaces I've designed and shipped — click any piece to view it full-screen.",
    items: [
      { tag: 'Web Redesign', title: 'Airline Website Redesign', alt: 'Airline website redesign' },
      { tag: 'Mobile App UI', title: 'Delivery Driver App', alt: 'Delivery driver app UI' },
      { tag: 'E-commerce', title: 'Luxury Watch Storefront', alt: 'Luxury watch storefront' },
      { tag: 'E-commerce', title: 'Jewelry E-commerce Platform', alt: 'Jewelry e-commerce platform' },
      { tag: 'Brand & Web', title: 'Jewelry Brand Showcase', alt: 'Jewelry brand showcase' },
      { tag: 'Web Platform', title: 'Energy Utility Portal', alt: 'Energy utility portal' },
    ],
    lightbox: {
      label: 'Design preview',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      zoom: 'View full screen',
    },
  },
};
