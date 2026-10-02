import { Header } from '@/components/layout/Header';
import { About, DesignShow, Hero, Process, Projects, Services, Stack, Testimonials } from '@/components/sections';

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
        <DesignShow />
        <Projects />
        <Testimonials />
        <Stack />
        <About />
      </main>
    </>
  );
}
