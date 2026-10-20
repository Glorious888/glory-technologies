import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeNavHub } from './components/HomeNavHub';
import { PageHeader } from './components/PageHeader';
import { AboutLogoSection } from './components/AboutLogoSection';
import { AboutStorySection } from './components/AboutStorySection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { LiveCodeShowcase } from './components/LiveCodeShowcase';
import { TechStackSection } from './components/TechStackSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialSpec, setInitialSpec] = useState('');

  // Handle URL hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'tech-stack', 'case-studies', 'estimator'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (spec?: string) => {
    if (spec) {
      setInitialSpec(spec);
    } else {
      setInitialSpec('');
    }
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setInitialSpec('');
  };

  const handleSelectService = (serviceName: string) => {
    handleOpenContact(`Interested in: ${serviceName}\nPlease provide detailed quote and roadmap.`);
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Dynamic View: Clean Front Page or Clicked Dedicated Page */}
      <main className="flex-1">
        {/* ================= HOME / FRONT PAGE ================= */}
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* Sleek, Non-Overloaded Hero */}
            <Hero
              onOpenContact={() => handleOpenContact()}
              onNavigate={handleNavigate}
            />

            {/* Clickable Navigation Hub: Explore About, Services, Estimator, Case Studies, Stack on Demand */}
            <HomeNavHub onNavigate={handleNavigate} />

            {/* Clean On-Page Contact Action */}
            <ContactSection onOpenModal={() => handleOpenContact()} />
          </div>
        )}

        {/* ================= ABOUT PAGE ================= */}
        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-300">
            <PageHeader
              currentPage={currentPage}
              title="About Glory Technologies"
              subtitle="The story of how Glorious Mupakaviri founded Glory Technologies at 18 with the vision to promote a tech environment, motivating every organization to own their digital presence."
              onNavigate={handleNavigate}
            />
            <AboutStorySection onOpenContact={() => handleOpenContact()} />
            <AboutLogoSection />
            <ContactSection onOpenModal={() => handleOpenContact()} />
          </div>
        )}

        {/* ================= SERVICES PAGE ================= */}
        {currentPage === 'services' && (
          <div className="animate-in fade-in duration-300">
            <PageHeader
              currentPage={currentPage}
              title="Coding & Web Development Services"
              subtitle="From high-converting custom websites to complex SaaS web applications, e-commerce storefronts, and cloud microservices."
              onNavigate={handleNavigate}
            />
            <ServicesSection onSelectService={handleSelectService} />
            <ProcessSection />
            <ContactSection onOpenModal={() => handleOpenContact()} />
          </div>
        )}

        {/* ================= PROJECT ESTIMATOR PAGE ================= */}
        {currentPage === 'estimator' && (
          <div className="animate-in fade-in duration-300">
            <PageHeader
              currentPage={currentPage}
              title="Interactive Project Estimator"
              subtitle="Transparent, accessible pricing starting from $100 to $200. Configure your required website features and get instant timeline estimates."
              onNavigate={handleNavigate}
            />
            <ProjectEstimator onOpenContactWithSpec={handleOpenContact} />
            <ContactSection onOpenModal={() => handleOpenContact()} />
          </div>
        )}

        {/* ================= CASE STUDIES PAGE ================= */}
        {currentPage === 'case-studies' && (
          <div className="animate-in fade-in duration-300">
            <PageHeader
              currentPage={currentPage}
              title="Case Studies & Production Proof"
              subtitle="Real client projects engineered with clean code, sub-second latency, and verified business results."
              onNavigate={handleNavigate}
            />
            <CaseStudiesSection />
            <ContactSection onOpenModal={() => handleOpenContact()} />
          </div>
        )}

        {/* ================= TECH STACK PAGE ================= */}
        {currentPage === 'tech-stack' && (
          <div className="animate-in fade-in duration-300">
            <PageHeader
              currentPage={currentPage}
              title="Technology Stack & Code Architecture"
              subtitle="Explore the languages, frameworks, and rigorous engineering practices Glory Technologies uses to deliver production systems."
              onNavigate={handleNavigate}
            />
            <TechStackSection />
            <LiveCodeShowcase />
            <ContactSection onOpenModal={() => handleOpenContact()} />
          </div>
        )}
      </main>

      {/* Footer with onNavigate routing */}
      <Footer
        onOpenContact={() => handleOpenContact()}
        onNavigate={handleNavigate}
      />

      {/* Project Inquiry & Discovery Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialSpec={initialSpec}
      />

      {/* Floating Quick Action Contact Bar */}
      <FloatingContactBar />
    </div>
  );
}
