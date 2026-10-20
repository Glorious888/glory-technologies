import React from 'react';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';
import { PageId } from './Navbar';

interface PageHeaderProps {
  currentPage: PageId;
  title: string;
  subtitle: string;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  currentPage,
  title,
  subtitle,
  onNavigate,
}) => {
  const tabs: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'estimator', label: 'Estimator ($100-$200+)' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'tech-stack', label: 'Tech Stack' },
  ];

  return (
    <div className="pt-28 pb-6 bg-[#060B18] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
          {/* Breadcrumb + Back to Home */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Front Page</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium capitalize">{title}</span>
          </div>

          {/* Quick Section Switcher Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onNavigate(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  currentPage === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
