import React from 'react';
import { 
  Users, 
  Code, 
  Layers, 
  FolderGit2, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PageId } from './Navbar';

interface HomeNavHubProps {
  onNavigate: (page: PageId) => void;
}

export const HomeNavHub: React.FC<HomeNavHubProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'about' as PageId,
      title: 'About Glory Technologies',
      subtitle: 'Our Story, Founder & Mission',
      description: 'Founded at age 18 by owner and founder Glorious Mupakaviri. Officially launched 19 October 2026 to promote a thriving tech environment and inspire every organization to own their digital space.',
      icon: Users,
      action: 'Read Our Story',
      accent: 'border-cyan-500/30 hover:border-cyan-400 group-hover:text-cyan-400',
      badge: 'Official Launch Oct 2026',
      badgeColor: 'text-cyan-300 bg-cyan-950/60 border-cyan-800'
    },
    {
      id: 'services' as PageId,
      title: 'Website & Coding Services',
      subtitle: 'What Glory Technologies Builds',
      description: 'Custom corporate websites, full-stack SaaS apps, e-commerce storefronts, REST/GraphQL APIs, and code performance optimizations.',
      icon: Code,
      action: 'Explore All 6 Services',
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:text-blue-400',
      badge: 'Bespoke Code',
      badgeColor: 'text-blue-300 bg-blue-950/60 border-blue-800'
    },
    {
      id: 'estimator' as PageId,
      title: 'Interactive Project Estimator',
      subtitle: 'Calculate Cost & Timeline',
      description: 'Configure your website or app requirements. Transparent ballpark quotes and delivery turnaround starting from $100 to $200.',
      icon: Calculator,
      action: 'Estimate Your Scope',
      accent: 'border-emerald-500/30 hover:border-emerald-400 group-hover:text-emerald-400',
      badge: 'From $100 - $200',
      badgeColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-800'
    },
    {
      id: 'case-studies' as PageId,
      title: 'Case Studies & Proof',
      subtitle: 'Proven Production Systems',
      description: 'Explore live case studies: DataView Enterprise Analytics (+140% retention), Aeterna Luxury E-Commerce (+82% checkout), and CloudCore Microservices.',
      icon: FolderGit2,
      action: 'View Case Studies',
      accent: 'border-indigo-500/30 hover:border-indigo-400 group-hover:text-indigo-400',
      badge: 'Verified Metrics',
      badgeColor: 'text-indigo-300 bg-indigo-950/60 border-indigo-800'
    },
    {
      id: 'tech-stack' as PageId,
      title: 'Our Technology Arsenal',
      subtitle: 'Languages & Architecture',
      description: 'Why we code strictly in TypeScript, React 19, Next.js, Node.js, and PostgreSQL for maximum security, speed, and zero technical debt.',
      icon: Layers,
      action: 'Inspect Tech Stack',
      accent: 'border-purple-500/30 hover:border-purple-400 group-hover:text-purple-400',
      badge: 'Modern Tooling',
      badgeColor: 'text-purple-300 bg-purple-950/60 border-purple-800'
    }
  ];

  return (
    <section className="py-20 bg-[#060B18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Explore Glory Technologies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Select a Section to View Full Details.
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Click on any section below to see our complete story, development capabilities, live portfolio, or instant pricing calculator.
          </p>
        </div>

        {/* 5-Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => {
                  onNavigate(card.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`p-6 rounded-2xl bg-[#091124] border ${card.accent} transition-all duration-300 hover:bg-slate-900/90 cursor-pointer flex flex-col justify-between space-y-6 shadow-xl group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-slate-700/80 text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      {card.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-cyan-300">
                  <span>{card.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
