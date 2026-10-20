import React, { useState } from 'react';
import { Layers, CheckCircle2, Shield, Zap, Sparkles, Terminal } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  role: string;
  advantage: string;
  badge: string;
}

export const TechStackSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'database' | 'devops'>('all');

  const technologies: TechItem[] = [
    // Frontend
    {
      name: 'TypeScript',
      category: 'frontend',
      role: 'Strict Type-Safe Systems',
      advantage: 'Prevents 85% of runtime bugs before deployment; guarantees bulletproof interface contracts.',
      badge: 'Core Standard'
    },
    {
      name: 'React 19 & Next.js',
      category: 'frontend',
      role: 'Modern UI & Server Components',
      advantage: 'Ultra-fast client hydration, modular component isolation, and dynamic routing architectures.',
      badge: 'Primary Framework'
    },
    {
      name: 'Tailwind CSS v4',
      category: 'frontend',
      role: 'Utility-First Styling',
      advantage: 'Zero CSS bloat, instantaneous rendering, and fluid responsive design across all viewports.',
      badge: 'Styling Engine'
    },
    {
      name: 'Vite 8',
      category: 'frontend',
      role: 'Next-Gen Build Tooling',
      advantage: 'Instant Hot Module Replacement and optimized tree-shaken production bundles.',
      badge: 'Build Pipeline'
    },

    // Backend
    {
      name: 'Node.js & Express',
      category: 'backend',
      role: 'High-Concurrency Runtime',
      advantage: 'Non-blocking I/O capable of handling thousands of concurrent client requests with minimal memory overhead.',
      badge: 'Runtime Engine'
    },
    {
      name: 'REST & GraphQL APIs',
      category: 'backend',
      role: 'Client-Server Communication',
      advantage: 'Standardized, self-documenting endpoints designed for clean third-party and mobile integration.',
      badge: 'Protocol'
    },

    // Database
    {
      name: 'PostgreSQL',
      category: 'database',
      role: 'Relational ACID Database',
      advantage: 'Rock-solid data integrity, robust indexing, and seamless JSON document query capabilities.',
      badge: 'Primary Database'
    },
    {
      name: 'Redis',
      category: 'database',
      role: 'In-Memory Caching & Sessions',
      advantage: 'Sub-millisecond latency for session state, rate limiting, and real-time pub/sub messaging.',
      badge: 'High-Speed Cache'
    },

    // DevOps
    {
      name: 'Docker Containers',
      category: 'devops',
      role: 'Containerized Deployment',
      advantage: 'Guarantees the application runs identically in development, staging, and production clusters.',
      badge: 'Containerization'
    },
    {
      name: 'Cloud Infrastructure (AWS/GCP)',
      category: 'devops',
      role: 'Auto-Scaling Architecture',
      advantage: 'Enterprise 99.99% availability, automated health monitoring, and zero-downtime rolling upgrades.',
      badge: 'Cloud Host'
    },
    {
      name: 'Automated CI/CD Pipelines',
      category: 'devops',
      role: 'Continuous Integration',
      advantage: 'Automated type checking, unit testing, and instant staging preview deployments on every commit.',
      badge: 'Automation'
    }
  ];

  const filtered = filter === 'all'
    ? technologies
    : technologies.filter(t => t.category === filter);

  return (
    <section id="tech-stack" className="py-24 bg-[#060B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Engineering Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Technologies We Master & Build With.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We reject fragile, bloated website builders. Glory Technologies writes clean, native code using modern industry-standard languages and frameworks engineered for longevity.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-8 flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto max-w-full inline-flex">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Stack ({technologies.length})
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              filter === 'frontend'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              filter === 'backend'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Backend & APIs
          </button>
          <button
            onClick={() => setFilter('database')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              filter === 'database'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Databases
          </button>
          <button
            onClick={() => setFilter('devops')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              filter === 'devops'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DevOps & Cloud
          </button>
        </div>

        {/* Tech Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#091124] border border-slate-800 hover:border-blue-500/50 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white font-mono">
                  {item.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                  {item.badge}
                </span>
              </div>

              <div className="text-xs font-medium text-blue-300">
                {item.role}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.advantage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
