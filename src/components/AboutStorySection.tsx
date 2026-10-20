import React from 'react';
import { Sparkles, Calendar, Target, Award, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import { GloryLogo } from './GloryLogo';

interface AboutStorySectionProps {
  onOpenContact: () => void;
}

export const AboutStorySection: React.FC<AboutStorySectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 bg-[#070E20] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Our Origin & Leadership</span>
            <span className="text-slate-600">·</span>
            <span>Glory Technologies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Empowering Every Organization to Own Their Digital Future.
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Glory Technologies was forged with a singular ambition: to foster an inclusive, vibrant tech environment and inspire every business, startup, and institution to establish their own cutting-edge web presence.
          </p>
        </div>

        {/* Story Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: The Founder Journey & Vision */}
          <div className="lg:col-span-7 rounded-2xl bg-[#091124] border border-slate-800 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-800/60">
                <Calendar className="w-3.5 h-3.5" />
                <span>Officially Launched · 19 October 2026</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Founded with Purpose, Built with Code
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Glory Technologies was developed throughout 2025 and officially launched on <strong className="text-cyan-400 font-semibold">19 October 2026</strong> by owner and founder <strong className="text-white font-semibold">Glorious Mupakaviri</strong>, who launched this organization at the age of 18.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  She founded Glory Technologies with the bold vision and idea of promoting a forward-looking tech environment, motivating every organization and business to have their own cutting-edge web presence, coding architecture, and scalable software solutions.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    To promote a vibrant tech environment and motivate every organization to build, own, and scale their bespoke digital identity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Empowering every business with accessible, high-performance coding and modern web development to thrive in the digital economy.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Innovate · Build · Deliver
              </span>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>Connect with Founder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Founder Profile & Milestones */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Founder Profile Card */}
            <div className="p-6 rounded-2xl bg-[#09122C] border border-blue-900/60 shadow-xl space-y-5">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Founder & Leadership</span>
              </div>

              {/* Founder Profile */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-lg text-white">
                    Glorious Mupakaviri
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded font-semibold">
                    Founder & CEO
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Launched Glory Technologies at age 18. Passionate tech visionary dedicated to democratizing software excellence, web development, and inspiring every company to have their own bespoke platform.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-cyan-400">
                  <a
                    href="mailto:glorytechnologies7@gmail.com"
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>glorytechnologies7@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="p-6 rounded-2xl bg-[#091124] border border-slate-800 space-y-4">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Organizational Milestones</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      2025 · Conception & Development
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      Core architecture, software standards, and foundational mission initiated by Glorious Mupakaviri.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      End of 2025 · Framework Expansion
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      Development of modern web development frameworks and production services.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0 shadow-[0_0_8px_#34d399]"></div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400">
                      19 October 2026 · Official Launch
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      Glory Technologies officially launches to motivate and empower every organization with their own custom web platform.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
