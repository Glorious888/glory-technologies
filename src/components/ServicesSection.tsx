import React, { useState } from 'react';
import { 
  Globe, 
  Code, 
  ShoppingCart, 
  Database, 
  Gauge, 
  ShieldCheck, 
  ArrowUpRight,
  Check,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: React.ElementType;
  deliverables: string[];
  techStack: string[];
  typicalTimeline: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('01');

  const services: ServiceItem[] = [
    {
      id: '01',
      number: '01',
      title: 'Custom Website Development',
      summary: 'Bespoke corporate websites, high-conversion landing pages, and interactive brand platforms built for speed, SEO dominance, and flawless cross-device responsiveness.',
      icon: Globe,
      deliverables: [
        'Responsive mobile-first layout',
        'Lighthouse 95+ performance rating',
        'SEO semantic structure & OpenGraph setup',
        'Interactive component animations',
        'Accessible WCAG AA standards'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js'],
      typicalTimeline: '2–4 Weeks'
    },
    {
      id: '02',
      number: '02',
      title: 'Full-Stack Web Applications',
      summary: 'Mission-critical SaaS applications, real-time client dashboards, and secure internal tools engineered with resilient architectures and type-safe data pipelines.',
      icon: Code,
      deliverables: [
        'Role-based access control (RBAC)',
        'Interactive dashboards & analytics graphs',
        'Type-safe REST / tRPC / GraphQL APIs',
        'Optimistic UI & state management',
        'Automated unit & integration tests'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Prisma / Drizzle'],
      typicalTimeline: '4–8 Weeks'
    },
    {
      id: '03',
      number: '03',
      title: 'E-Commerce & Digital Storefronts',
      summary: 'High-speed headless commerce platforms, custom shopping carts, seamless payment gateway integrations, and conversion-optimized checkout funnels.',
      icon: ShoppingCart,
      deliverables: [
        'Stripe & multi-currency payment checkout',
        'Dynamic inventory & product catalog',
        'Customer order history & receipts',
        'Abandoned cart recovery workflows',
        'Instant sub-second page transitions'
      ],
      techStack: ['Next.js', 'Stripe API', 'Tailwind CSS', 'PostgreSQL'],
      typicalTimeline: '3–6 Weeks'
    },
    {
      id: '04',
      number: '04',
      title: 'API & Cloud Infrastructure',
      summary: 'Robust backend APIs, database design, serverless microservices, and automated CI/CD deployment pipelines that scale seamlessly with your traffic.',
      icon: Database,
      deliverables: [
        'Scalable REST & GraphQL microservices',
        'PostgreSQL database normalization & migrations',
        'JWT & OAuth secure authentication',
        'Docker containerization & cloud hosting',
        'Automated CI/CD deployment pipelines'
      ],
      techStack: ['Node.js', 'Docker', 'PostgreSQL', 'AWS / Google Cloud'],
      typicalTimeline: '3–5 Weeks'
    },
    {
      id: '05',
      number: '05',
      title: 'Code Modernization & Speed Optimization',
      summary: 'Transform slow, legacy codebases into modern, maintainable systems. We eliminate technical debt, improve Core Web Vitals, and patch security vulnerabilities.',
      icon: Gauge,
      deliverables: [
        'Core Web Vitals acceleration to 95+',
        'JavaScript bundle size reduction',
        'TypeScript migration from untyped JS',
        'CSS refactoring to utility architecture',
        'Security & dependency vulnerability audit'
      ],
      techStack: ['Webpack to Vite migration', 'TypeScript', 'Lighthouse'],
      typicalTimeline: '1–3 Weeks'
    },
    {
      id: '06',
      number: '06',
      title: 'Technical Support & Retainer Partnership',
      summary: 'Continuous development and dedicated software maintenance. We serve as your on-demand technical team for updates, uptime monitoring, and feature iteration.',
      icon: ShieldCheck,
      deliverables: [
        'Dedicated engineering support channel',
        'Monthly dependency & security updates',
        'Zero-downtime uptime monitoring',
        'Priority bug fixes within SLA',
        'Continuous feature rollouts'
      ],
      techStack: ['GitHub Actions', 'Error Telemetry', 'Cloud Ops'],
      typicalTimeline: 'Monthly Partnership'
    }
  ];

  const currentService = services.find(s => s.id === selectedServiceId) || services[0];

  return (
    <section id="services" className="py-24 bg-[#060B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            End-to-End Coding & Web Development Services.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From modern responsive marketing websites to complex cloud-native web applications, Glory Technologies provides complete software engineering tailored to your business objectives.
          </p>
        </div>

        {/* Dynamic Bento & Editorial Service Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Cards */}
          <div className="lg:col-span-7 space-y-3">
            {services.map((service) => {
              const isSelected = service.id === selectedServiceId;
              const IconComp = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-950/40 to-slate-900 border-blue-500/80 shadow-[0_0_20px_rgba(37,99,235,0.15)]'
                      : 'bg-[#091124] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-blue-400">
                            {service.number}.
                          </span>
                          <h3 className="text-base font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                          {service.summary}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-blue-400' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Specification View */}
          <div className="lg:col-span-5 sticky top-28 p-7 rounded-2xl bg-[#09122C] border border-blue-900/60 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                <span>SPECIFICATION</span>
                <span>·</span>
                <span>{currentService.number}</span>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Est: <span className="text-white font-mono">{currentService.typicalTimeline}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                {currentService.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentService.summary}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                What You Receive:
              </div>
              <div className="space-y-2">
                {currentService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Production Tech Stack:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentService.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-blue-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={() => onSelectService(currentService.title)}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <span>Request {currentService.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
