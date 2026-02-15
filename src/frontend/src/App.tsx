import { useEffect, useRef } from 'react';
import TopNav from './components/TopNav';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ClientResultsSection from './components/sections/ClientResultsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    portfolio: null,
    about: null,
    services: null,
    results: null,
    testimonials: null,
    contact: null,
  });

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Store refs for all sections
    sectionsRef.current = {
      home: document.getElementById('home'),
      portfolio: document.getElementById('portfolio'),
      about: document.getElementById('about'),
      services: document.getElementById('services'),
      results: document.getElementById('results'),
      testimonials: document.getElementById('testimonials'),
      contact: document.getElementById('contact'),
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopNav onNavigate={scrollToSection} />
      
      <main>
        <section id="home">
          <HeroSection onGetStarted={() => scrollToSection('contact')} />
        </section>

        <section id="about">
          <AboutSection onLearnMore={() => scrollToSection('services')} />
        </section>

        <section id="services">
          <ServicesSection onExploreServices={() => scrollToSection('portfolio')} />
        </section>

        <section id="portfolio">
          <PortfolioSection onViewFullPortfolio={() => scrollToSection('contact')} />
        </section>

        <section id="results">
          <ClientResultsSection onGetYourResults={() => scrollToSection('contact')} />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
