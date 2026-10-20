import React, { useState } from 'react';
import { GloryLogo } from './GloryLogo';
import { Check, Copy, Sparkles, Download, Layers } from 'lucide-react';

export const AboutLogoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeVariant, setActiveVariant] = useState<'poster' | 'full' | 'horizontal' | 'mark'>('poster');

  const handleCopyTagline = () => {
    navigator.clipboard.writeText('GLORY TECHNOLOGIES - INNOVATE. BUILD. DELIVER. Smart Solutions. Powerful Results.');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#070E20] border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Brand Identity Emblem Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#081026] border border-blue-900/50 shadow-2xl relative">
            <div className="w-full flex justify-center py-2">
              <GloryLogo size="lg" variant={activeVariant} showTagline={true} />
            </div>

            {/* Interactive Logo Mode Controls (Clean Segmented Control) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-lg mt-6">
              <button
                onClick={() => setActiveVariant('poster')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeVariant === 'poster'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Official Logo Graphic
              </button>
              <button
                onClick={() => setActiveVariant('full')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeVariant === 'full'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Centered Lockup
              </button>
              <button
                onClick={() => setActiveVariant('horizontal')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeVariant === 'horizontal'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Horizontal Nav
              </button>
              <button
                onClick={() => setActiveVariant('mark')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeVariant === 'mark'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Emblem Mark
              </button>
            </div>
          </div>

          {/* Right: The Glory Technologies Vision & Identity */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Brand Identity & Mission
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Built on Innovation. Driven by Code. Engineered for Delivery.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              At <strong className="text-white">Glory Technologies</strong>, our emblem embodies the dual pillars of modern digital engineering: the continuous forward momentum of the curved <span className="text-blue-400 font-semibold">G</span>, paired with ascending digital pixel blocks representing modular code, scalable architecture, and transformative technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Our Mission
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  To craft intelligent, resilient software and web platforms that empower businesses to scale faster, engage customers, and outpace competition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Our Code Philosophy
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clean architecture, strict type-safety, accessible design, and modular codebases that your company can scale effortlessly over years.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={handleCopyTagline}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg px-3.5 py-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Motto Copied!' : 'Copy Official Tagline'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
