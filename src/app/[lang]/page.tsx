import { Header } from '@/components/layout/Header';
import { About, Hero, Process, Projects, Services, Stack, Testimonials } from '@/components/sections';

/**
 * The sections built so far. A new one drops in the same way - add the
 * component, its dictionary entries, and it picks up all three languages.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        {/* Design Show is built and still exported, just not rendered. It was
            six image tiles making a point Projects already makes with real
            client work, and on a phone that cost about three screens of scroll
            on a page that was already 15.7 screens long. To bring it back: add
            DesignShow to the import above, put the element here, and uncomment
            the nav entry in src/content/navigation.ts. */}
        <Projects />
        <Testimonials />
        <Stack />
        <About />
      </main>
    </>
  );
}
