import React, { useState, useEffect } from 'react';
import { GloryLogo } from './GloryLogo';
import { Menu, X, Mail, Phone } from 'lucide-react';

export type PageId = 'home' | 'about' | 'services' | 'tech-stack' | 'case-studies' | 'estimator';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact: (spec?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#060B18]/90 backdrop-blur-md border-slate-800/80 shadow-lg shadow-black/30 py-3.5'
          : 'bg-[#060B18]/40 backdrop-blur-sm border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Glory Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 text-left cursor-pointer"
          >
            <GloryLogo size="md" variant="horizontal" />
          </button>

          {/* Zone 2: 5 single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'about'
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'services'
                  ? 'text-blue-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('tech-stack')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'tech-stack'
                  ? 'text-blue-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPage === 'case-studies'
                  ? 'text-blue-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('estimator')}
              className={`transition-colors whitespace-nowrap shrink-0 font-semibold cursor-pointer ${
                currentPage === 'estimator'
                  ? 'text-cyan-400'
                  : 'text-blue-400 hover:text-cyan-300'
              }`}
            >
              Project Estimator
            </button>
          </nav>

          {/* Zone 3: 1 primary action + direct contact triggers */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Email Button with Mail Icon */}
            <a
              href="mailto:glorytechnologies7@gmail.com?subject=Inquiry%20from%20Website%20-%20Glory%20Technologies"
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors flex items-center justify-center shrink-0"
              title="Email glorytechnologies7@gmail.com"
              aria-label="Send email to glorytechnologies7@gmail.com"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Direct Phone Call Button with Phone Icon */}
            <a
              href="tel:+263771193628"
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors flex items-center justify-center shrink-0"
              title="Call +263 77 119 3628"
              aria-label="Call +263 77 119 3628"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.35)] hover:shadow-[0_0_22px_rgba(37,99,235,0.6)] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Start Your Project
            </button>
          </div>

          {/* Mobile Quick Action Buttons & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="mailto:glorytechnologies7@gmail.com?subject=Website%20Inquiry%20-%20Glory%20Technologies"
              className="p-2 rounded-lg bg-blue-600 text-white"
              title="Email glorytechnologies7@gmail.com"
              aria-label="Email glorytechnologies7@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+263771193628"
              className="p-2 rounded-lg bg-slate-800 text-emerald-400 border border-slate-700"
              title="Call +263 77 119 3628"
              aria-label="Call +263 77 119 3628"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1128] border-b border-slate-800 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium py-1.5 text-left ${
                currentPage === 'home' ? 'text-white font-bold' : 'text-slate-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-medium py-1.5 text-left ${
                currentPage === 'about' ? 'text-cyan-400 font-bold' : 'text-slate-300'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-sm font-medium py-1.5 text-left ${
                currentPage === 'services' ? 'text-blue-400 font-bold' : 'text-slate-300'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('tech-stack')}
              className={`text-sm font-medium py-1.5 text-left ${
                currentPage === 'tech-stack' ? 'text-blue-400 font-bold' : 'text-slate-300'
              }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className={`text-sm font-medium py-1.5 text-left ${
                currentPage === 'case-studies' ? 'text-blue-400 font-bold' : 'text-slate-300'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('estimator')}
              className={`text-sm font-medium py-1.5 text-left ${
                currentPage === 'estimator' ? 'text-cyan-400 font-bold' : 'text-blue-400'
              }`}
            >
              Project Estimator ($100 - $200+)
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Start Your Project
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="mailto:glorytechnologies7@gmail.com?subject=Website%20Inquiry%20-%20Glory%20Technologies"
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 text-white shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>
              <a
                href="tel:+263771193628"
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-600 text-white shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+263 77 119 3628</span>
              </a>
            </div>
            <div className="text-center pt-0.5">
              <a
                href="tel:0783747554"
                className="text-xs text-slate-400 hover:text-white"
              >
                Alt Line: 0783747554
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
