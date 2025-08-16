import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { MinimalCenteredHero } from '@/components/heros/minimal-centered-hero';
import { ThreeColumnImageCards } from '@/components/feature/three-column-image-cards';
import { SimpleGridStats } from '@/components/stats/simple-grid-stats';
import { GridOverlayGallery } from '@/components/gallery/grid-overlay-gallery';
import EducationTimeline from '@/components/experience/education-timeline';
import CertificationGrid from '@/components/certifications/certification-grid';
import { ComprehensiveContactForm } from '@/components/contact/comprehensive-contact-form';
import { MinimalCenteredFooter } from '@/components/footers/minimal-centered-footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnimatedIndicatorNavbar />
      <section id="home">
        <MinimalCenteredHero />
      </section>
      <section id="about">
        <ThreeColumnImageCards />
      </section>
      <section id="skills">
        <SimpleGridStats />
      </section>
      <section id="projects">
        <GridOverlayGallery />
      </section>
      <section id="experience">
        <EducationTimeline />
      </section>
      <section id="certifications">
        <CertificationGrid />
      </section>
      <section id="contact">
        <ComprehensiveContactForm />
      </section>
      <MinimalCenteredFooter />
    </main>
  );
}