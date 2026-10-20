import React from 'react';
import { ArrowRight, Code2, Layers, CheckCircle2, Mail, Phone } from 'lucide-react';
import heroImage from '../assets/images/hero_tech_workspace_1792399904046.jpg';

import { PageId } from './Navbar';

interface HeroProps {
  onOpenContact: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Motto kicker (unboxed, clean metadata discipline) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              <span>INNOVATE</span>
              <span className="text-slate-600">·</span>
              <span>BUILD</span>
              <span className="text-slate-600">·</span>
              <span>DELIVER</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-normal normal-case">Glory Technologies</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Engineering Modern Websites & High-Performance Software.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Glory Technologies architects bespoke digital platforms, responsive business websites, and scalable full-stack applications. We bring together clean code, modern UX design, and robust cloud infrastructure to turn ideas into powerful reality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('estimator');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Estimate Scope ($100 - $200+)</span>
              </button>
            </div>

            {/* Direct Contact Bar - Instant Email & Call lines */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="mailto:glorytechnologies7@gmail.com?subject=Project%20Inquiry%20-%20Glory%20Technologies"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-500 border border-blue-400/40 rounded-lg shadow-sm transition-all hover:scale-[1.02]"
                title="Send email straight to glorytechnologies7@gmail.com"
              >
                <Mail className="w-4 h-4 text-cyan-200" />
                <span>glorytechnologies7@gmail.com</span>
              </a>

              <a
                href="tel:+263771193628"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/40 rounded-lg transition-all"
                title="Call or WhatsApp +263 77 119 3628"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+263 77 119 3628</span>
              </a>

              <a
                href="tel:0783747554"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all"
                title="Call 0783747554"
              >
                <Phone className="w-3 h-3 text-slate-400" />
                <span>0783747554</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Custom Code (No Fragile Templates)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Mobile & Desktop First
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Direct Senior Engineering Support
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Glass Tech Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
              <img
                src={heroImage}
                alt="Glory Technologies modern software engineering studio"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-80" />

              {/* Floating Engineering Preview Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a1128]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 shadow-xl">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200 font-medium">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>Glory Tech Production Stack</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">v2026.Ready</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2.5 text-[11px] text-slate-300">
                  <div className="bg-slate-800/70 rounded px-2 py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>React & TS</span>
                  </div>
                  <div className="bg-slate-800/70 rounded px-2 py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>Node & APIs</span>
                  </div>
                  <div className="bg-slate-800/70 rounded px-2 py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Cloud & DB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: 4-Column KPI Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              &lt; 1.2s
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Average Page Load Time
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 font-medium">
              TypeScript & Type-Safe Code
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
              99.98%
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Production Architecture Uptime
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight font-mono tabular-nums">
              4–6 Wks
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Typical Custom MVP Turnaround
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
