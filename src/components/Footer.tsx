import React from 'react';
import { GloryLogo } from './GloryLogo';
import { Mail, MapPin, ArrowUpRight, Phone } from 'lucide-react';

import { PageId } from './Navbar';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <footer className="bg-[#040812] border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <GloryLogo size="md" variant="horizontal" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering modern websites, custom web applications, and scalable software architectures for forward-thinking brands worldwide.
            </p>
            <div className="pt-1 text-xs font-bold tracking-widest text-slate-500 uppercase">
              INNOVATE · BUILD · DELIVER
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Full-Stack SaaS Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  E-Commerce Storefronts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  API & Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Code Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services & Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('case-studies');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('tech-stack');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Technology Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('estimator');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left text-cyan-400 font-medium"
                >
                  Project Estimator ($100 - $200+)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Channel */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Get In Touch
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:glorytechnologies7@gmail.com?subject=Website%20Inquiry%20-%20Glory%20Technologies"
                className="flex items-center gap-2 hover:text-white transition-colors text-cyan-300 font-medium break-all"
                title="Send email straight to glorytechnologies7@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                <span>glorytechnologies7@gmail.com</span>
              </a>

              <a
                href="tel:+263771193628"
                className="flex items-center gap-2 hover:text-white transition-colors text-emerald-400 font-medium"
                title="Call or WhatsApp +263 77 119 3628"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>+263 77 119 3628 (WhatsApp)</span>
              </a>

              <a
                href="tel:0783747554"
                className="flex items-center gap-2 hover:text-white transition-colors text-slate-300 font-medium"
                title="Call 0783747554"
              >
                <Phone className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span>0783747554</span>
              </a>

              <div className="text-slate-400 text-[11px] pt-1">
                Available for local & international coding projects.
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <a
                  href="mailto:glorytechnologies7@gmail.com?subject=Website%20Inquiry%20-%20Glory%20Technologies"
                  className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Go Straight to Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Glory Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Innovate. Build. Deliver.</span>
            <span>·</span>
            <span>Smart Solutions. Powerful Results.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
