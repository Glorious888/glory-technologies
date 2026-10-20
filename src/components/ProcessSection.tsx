import React from 'react';
import { Compass, Palette, Code2, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Architectural Discovery',
      icon: Compass,
      description: 'We analyze your business requirements, user flows, and technical objectives. Together we lock in the scope, technology choices, and milestone schedule.',
      deliverable: 'Technical Specification & Wireframe Blueprint'
    },
    {
      number: '02',
      title: 'Design & Interactive Prototype',
      icon: Palette,
      description: 'We craft bespoke responsive interfaces with custom UI systems, fluid motion micro-interactions, and accessible typography before writing a line of backend code.',
      deliverable: 'Figma High-Fidelity UI & Design System'
    },
    {
      number: '03',
      title: 'Full-Stack Agile Coding',
      icon: Code2,
      description: 'Our senior engineers write clean, strictly-typed TypeScript and test-driven code in weekly sprints, providing you continuous staging links for direct review.',
      deliverable: 'Production-Ready Web Application & Unit Tests'
    },
    {
      number: '04',
      title: 'Launch & Continuous Care',
      icon: Rocket,
      description: 'We orchestrate zero-downtime production deployment, SSL certificates, CDN caching, and automated error monitoring to ensure seamless reliability.',
      deliverable: 'Live Production Platform & Documentation'
    }
  ];

  return (
    <section className="py-24 bg-[#070E20] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Our 4-Step Engineering Methodology.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transparent milestones, rapid communication, and rigorous quality assurance at every stage of the software lifecycle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#091124] border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-blue-400">
                      {step.number}.
                    </span>
                    <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Outcome:
                  </div>
                  <div className="text-xs font-medium text-blue-300 mt-1">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
