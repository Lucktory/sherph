# Portfolio

Next.js (App Router) + TypeScript rebuild of the reference portfolio, covering
the first four sections: **Hero**, **Process**, **Services**, and **Design Show**.
Everything is trilingual — English, Spanish and Portuguese — and the header
toggle switches language instantly, without a page load.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to your language
npm run build    # prerenders /en, /es and /pt
npm start
npm run typecheck
```

## How the languages work

The URL carries the language (`/en`, `/es`, `/pt`), so each version is
server-rendered, statically prerendered, indexable, and shareable. Visiting `/`
redirects to the visitor's language — their last explicit choice (a `locale`
cookie) if they made one, otherwise the closest match for their
`Accept-Language` header. That happens in [middleware.ts](src/middleware.ts).

All three dictionaries ship to the browser together. They hold plain text only,
so switching language is a React state update rather than a navigation: the page
re-renders in the new language within a frame, the URL is rewritten with
`history.replaceState` (no scroll jump, no refetch), and the choice is stored in
the cookie for next time. See [LanguageProvider.tsx](src/i18n/LanguageProvider.tsx).

### The services bento

[src/content/services.ts](src/content/services.ts) holds the grid: each entry's
`span` sizes its cell and `visual` picks the data graphic drawn in place of a
bullet list. The spans tile the four columns exactly, so auto-placement lands
every cell without an explicit grid-area — **change a span and you must re-check
that the spans still add up**, or cells will reflow into gaps.

That list is matched to `services.items` in the dictionaries **by index**. The
first entry is the flagship (the large cell). To lead with a different service,
move it to the front in `services.ts` *and* in all three dictionaries.

Structural numbers (bar lengths, ring fill) live in `services.ts`; the figures a
visitor actually reads live in the dictionaries, so they can be translated —
Portuguese writes `2,5` where English writes `2.5`.

### Adding or editing copy

Translated text lives **only** in the dictionaries:

- [src/i18n/dictionaries/en.ts](src/i18n/dictionaries/en.ts)
- [src/i18n/dictionaries/es.ts](src/i18n/dictionaries/es.ts)
- [src/i18n/dictionaries/pt.ts](src/i18n/dictionaries/pt.ts)

They are all typed against `Dictionary` in [src/i18n/types.ts](src/i18n/types.ts),
so adding a field to one language makes TypeScript require it in the other two —
a missing translation is a build error, not a silent fallback to English.

Headings are stored split in two (`{ lead, grad }`) so the trailing fragment can
carry the gradient treatment without any HTML inside the translation strings.

### Adding a language

1. Add the code to `locales` in [src/i18n/config.ts](src/i18n/config.ts) and give
   it a label plus a BCP-47 tag.
2. Create the dictionary and register it in
   [src/i18n/dictionaries/index.ts](src/i18n/dictionaries/index.ts).

The route, the toggle, the static prerender and the `hreflang` tags all read from
`locales`, so nothing else needs touching.

## Layout

```
src/
  app/
    globals.css          design tokens + shared primitives (.wrap .btn .kicker .h2 .grad .reveal)
    [lang]/layout.tsx    root layout: font, metadata, hreflang, LanguageProvider
    [lang]/page.tsx      composes the four sections
  components/
    layout/              Header, LanguageToggle
    sections/            Hero, Process, Services, DesignShow
    ui/                  Lightbox
    icons/               ProcessIcons (+ the shared SVG gradient)
  content/               structural data that is NOT translated (nav order, image files)
  hooks/                 useReveal, useStickyHeader, useScrollSpy, useVideoPlayback
  i18n/                  config, types, dictionaries, LanguageProvider
  config/site.ts         brand name, contact URL, canonical origin
```

### Styling

The reference site's design tokens and CSS are carried over verbatim. Anything
shared between sections lives in `globals.css`; everything else is a CSS module
next to its component, so section styles cannot leak into each other.

### Motion

Animation is GSAP + ScrollTrigger, set up once in [src/lib/gsap.ts](src/lib/gsap.ts).
Two rules keep it predictable:

- **`fromTo`, never `from`.** `from` infers its destination by reading the
  element's current value. React StrictMode mounts effects twice, so the second
  pass reads back the start value the first pass left behind and you get a tween
  that runs `0 → 0` — an element that never appears.
- **GSAP owns `transform` on anything it animates.** It writes inline styles,
  which outrank any CSS rule, so those elements must not set `transform` in a
  `:hover` rule — it would silently stop applying. Hover CSS there is limited to
  colour and shadow.

One more trap worth knowing: **do not put `overflow: hidden` on a section that
contains a ScrollTrigger**. It makes the section a scroll container, ScrollTrigger
then treats it as the scroller for triggers inside it, and since it never scrolls
those triggers never fire.

Cursor-driven effects ([InteractiveMesh](src/components/ui/InteractiveMesh.tsx),
[useMagneticTilt](src/hooks/useMagneticTilt.ts)) are gated behind
`(hover: hover) and (pointer: fine)` plus `prefers-reduced-motion`, so touch
devices and reduced-motion users get the static layout.

`InteractiveMesh` draws its dot grid to a canvas rather than the DOM — a section
this size holds well over a thousand dots, which is far too many elements for the
layout engine. It stops drawing entirely once the mesh has settled and the cursor
has left, and ScrollTrigger removes it from the ticker while the section is off
screen, so an idle mesh costs nothing.

In development, `window.__gsap` and `window.__ScrollTrigger` are exposed;
`__ScrollTrigger.getAll()` shows every trigger's element, start/end and progress,
which is the fastest way to diagnose an animation that will not fire.

## Adding the remaining sections

The header already links to `#projects`, `#testimonials`, `#stacks`,
`#certifications` and `#about` — those links start working as soon as a section
with the matching `id` exists. For each new section:

1. Add a component under `src/components/sections/` with its own CSS module.
2. Add its copy to all three dictionaries and its shape to `Dictionary`.
3. Export it from `src/components/sections/index.ts` and drop it into
   [src/app/[lang]/page.tsx](src/app/[lang]/page.tsx).

## Before deploying

- Set `url` in [src/config/site.ts](src/config/site.ts) to the real domain — it
  backs the canonical and `hreflang` tags.
- `contactUrl` in the same file is what every "Let's Talk" / "Start a Project"
  button points at.
