import React, { useState } from 'react';
import { ExternalLink, CheckCircle, X, ArrowRight, Layers, Cpu, Zap } from 'lucide-react';
import webAppImg from '../assets/images/showcase_web_app_1792399904395.jpg';
import ecomImg from '../assets/images/showcase_ecommerce_platform_1792399905273.jpg';
import cloudImg from '../assets/images/showcase_custom_software_1792399905294.jpg';

interface CaseStudy {
  id: string;
  category: 'web-apps' | 'ecommerce' | 'cloud-api';
  categoryLabel: string;
  title: string;
  client: string;
  image: string;
  summary: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web-apps' | 'ecommerce' | 'cloud-api'>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'dataview',
      category: 'web-apps',
      categoryLabel: 'SaaS Web Application',
      title: 'DataView Enterprise Analytics Suite',
      client: 'DataView Global Systems',
      image: webAppImg,
      summary: 'A high-throughput web application capable of processing real-time telemetry streams, client event analytics, and customizable interactive report dashboards.',
      metric: '+140%',
      metricLabel: 'User Session Retention in 90 Days',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      challenge: 'The client needed a responsive, sub-second reporting portal for 25,000+ active enterprise users without latency spikes during peak reporting hours.',
      solution: 'Glory Technologies engineered an optimized React SPA with optimistic query caching, server-side data chunking, and strict type-safety across backend microservices.',
      results: [
        'Dashboard load time reduced from 4.8s to 380ms',
        'Zero reported UI crashes across 6 months of continuous operation',
        'Mobile responsive dashboard enabled executive field approvals'
      ]
    },
    {
      id: 'aeterna',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce Platform',
      title: 'Aeterna Luxury Digital Flagship',
      client: 'Aeterna Watchmakers',
      image: ecomImg,
      summary: 'A headless e-commerce storefront delivering immersive product storytelling, multi-currency checkout, and seamless integration with Stripe payment processing.',
      metric: '+82%',
      metricLabel: 'Mobile Checkout Conversion Rate',
      tech: ['Next.js', 'Stripe API', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
      challenge: 'High cart abandonment rates on legacy platforms due to sluggish page transitions and complicated multi-step mobile checkout forms.',
      solution: 'Glory Technologies developed a headless, lightning-fast digital storefront with single-click payment workflows, automated tax/currency computation, and CDN image pipelines.',
      results: [
        '99/100 Google Lighthouse mobile performance score',
        'Average checkout completion time reduced by 54 seconds',
        'Over $1.8M in processed transactions during the first quarter'
      ]
    },
    {
      id: 'cloudcore',
      category: 'cloud-api',
      categoryLabel: 'Cloud & API Architecture',
      title: 'CloudCore Distributed API Gateway',
      client: 'CloudCore Infrastructure',
      image: cloudImg,
      summary: 'Resilient microservices architecture and high-capacity RESTful API endpoints powering distributed IoT devices and web application clients.',
      metric: '99.99%',
      metricLabel: 'Uptime Across 4.8M Daily Requests',
      tech: ['Node.js', 'Docker', 'PostgreSQL', 'AWS Cloud', 'Jest'],
      challenge: 'Legacy monolithic architecture frequently broke under sudden traffic spikes, causing API timeouts and database deadlocks.',
      solution: 'We decoupled the monolith into containerized Node.js services with connection pooling, automated failover routing, and comprehensive health monitoring.',
      results: [
        '4.8M daily API calls handled with zero degraded performance',
        'Infrastructure cloud spend decreased by 38% via smart auto-scaling',
        '100% automated CI/CD pipeline enabled zero-downtime releases'
      ]
    }
  ];

  const filteredStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section id="case-studies" className="py-24 bg-[#070E20] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Built by Glory Technologies.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore real-world software engineering case studies showcasing how our custom coding and web architectures solve concrete business challenges.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('web-apps')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'web-apps'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setActiveFilter('ecommerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'ecommerce'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce
            </button>
            <button
              onClick={() => setActiveFilter('cloud-api')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === 'cloud-api'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cloud & APIs
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-slate-800/80 bg-[#091124] overflow-hidden flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group shadow-xl"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent opacity-90" />
                  
                  {/* Clean unboxed category label */}
                  <div className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-[#060B18]/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700">
                    {study.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      Client: {study.client}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Adjacent Proof Metric */}
                  <div className="pt-2 pb-1 border-t border-slate-800">
                    <div className="text-2xl font-extrabold text-blue-400 font-mono tabular-nums">
                      {study.metric}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {study.metricLabel}
                    </div>
                  </div>

                  {/* Clean Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Technical Details</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a1128] border border-blue-900/60 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {selectedStudy.categoryLabel} · {selectedStudy.client}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedStudy.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/9] max-h-72">
              <img
                src={selectedStudy.image}
                alt={selectedStudy.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quantitative Proof Strip */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {selectedStudy.metric}
                </div>
                <div className="text-xs text-blue-300 font-medium">
                  {selectedStudy.metricLabel}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded border border-slate-700">
                  Verified In Production
                </span>
              </div>
            </div>

            {/* Technical Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Engineering Challenge
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedStudy.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  Glory Tech Solution
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedStudy.solution}
                </p>
              </div>
            </div>

            {/* Outcomes */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Measurable Impact:
              </div>
              <div className="space-y-2">
                {selectedStudy.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Close Project Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
