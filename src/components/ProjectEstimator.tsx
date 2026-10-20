import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, ArrowRight, Check } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenContactWithSpec: (specDetails: string) => void;
}

interface ProjectTypeOption {
  id: string;
  title: string;
  basePrice: number;
  baseWeeks: number;
  desc: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  weeks: number;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenContactWithSpec }) => {
  const projectTypes: ProjectTypeOption[] = [
    {
      id: 'website',
      title: 'Modern Business Website',
      basePrice: 100,
      baseWeeks: 1,
      desc: 'High-converting responsive landing page or multi-page brand website with custom styling and SEO.'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Storefront',
      basePrice: 160,
      baseWeeks: 2,
      desc: 'Headless digital commerce with payment checkout, inventory catalog, and responsive design.'
    },
    {
      id: 'backend',
      title: 'Custom API & Cloud Backend',
      basePrice: 140,
      baseWeeks: 2,
      desc: 'Scalable REST/GraphQL endpoints, database schemas, and microservice infrastructure.'
    },
    {
      id: 'webapp',
      title: 'Full-Stack Web App / SaaS',
      basePrice: 200,
      baseWeeks: 3,
      desc: 'Dynamic cloud application with real-time UI, state management, databases, and client dashboards.'
    }
  ];

  const featureOptions: FeatureOption[] = [
    { id: 'auth', name: 'User Authentication & RBAC', price: 30, weeks: 0.5 },
    { id: 'payments', name: 'Payment Gateway Integration', price: 35, weeks: 0.5 },
    { id: 'dashboard', name: 'Interactive Analytics & Charts', price: 40, weeks: 0.5 },
    { id: 'cms', name: 'Content Management (CMS)', price: 25, weeks: 0.5 },
    { id: 'apis', name: 'Third-Party API Integrations', price: 25, weeks: 0.5 },
    { id: 'seo', name: 'Advanced SEO & Vitals Hardening', price: 20, weeks: 0.5 }
  ];

  const [selectedType, setSelectedType] = useState<string>('website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['seo']);
  const [isExpedited, setIsExpedited] = useState<boolean>(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[1];
  const featuresTotal = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find(f => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const rawPrice = currentType.basePrice + featuresTotal;
  const finalPrice = isExpedited ? Math.round(rawPrice * 1.25) : rawPrice;

  const featuresWeeks = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find(f => f.id === fId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const rawWeeks = Math.ceil(currentType.baseWeeks + featuresWeeks);
  const finalWeeks = isExpedited ? Math.max(2, Math.ceil(rawWeeks * 0.75)) : rawWeeks;

  const handleBookWithSpec = () => {
    const selectedFeatureNames = selectedFeatures
      .map(id => featureOptions.find(f => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const spec = `Project Scope: ${currentType.title}\nIncluded Features: ${selectedFeatureNames || 'Standard Baseline'}\nPacing: ${isExpedited ? 'Expedited Sprint' : 'Standard Agile'}\nEst. Budget: $${finalPrice.toLocaleString()}\nEst. Timeline: ~${finalWeeks} Weeks`;
    onOpenContactWithSpec(spec);
  };

  return (
    <section id="estimator" className="py-24 bg-[#060B18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Interactive Scope Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Estimate Your Project Scope & Timeline.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Get an instant, transparent ballpark estimate based on Glory Technologies' modular engineering standards. Configure your requirements below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Select Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Step 1: Select Core Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedType === type.id
                        ? 'bg-blue-950/40 border-blue-500 text-white shadow-md shadow-blue-500/10'
                        : 'bg-[#091124] border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-white">{type.title}</span>
                      <span className="text-xs font-mono text-cyan-400">
                        From ${type.basePrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {type.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Features */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Step 2: Add Required Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map(feat => {
                  const active = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                        active
                          ? 'bg-blue-950/30 border-blue-500 text-white'
                          : 'bg-[#091124] border-slate-800/80 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          active ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-600 bg-slate-900'
                        }`}>
                          {active && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium">{feat.name}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        +${feat.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pacing */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Step 3: Delivery Pacing
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsExpedited(false)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    !isExpedited
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Standard Agile (Recommended)
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpedited(true)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    isExpedited
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Expedited Sprint (+25% Speed Boost)
                </button>
              </div>
            </div>
          </div>

          {/* Right: Realtime Summary Card */}
          <div className="lg:col-span-4 sticky top-28 p-6 rounded-2xl bg-[#09122C] border border-blue-900/60 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Estimate Summary</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                Live Dynamic
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-slate-400">Estimated Investment</div>
                <div className="text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
                  ${finalPrice.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 font-sans ml-1.5">USD</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">Estimated Turnaround</div>
                <div className="text-xl font-bold text-blue-400 font-mono tabular-nums mt-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>~{finalWeeks} Weeks</span>
                </div>
              </div>
            </div>

            {/* Spec breakdown preview */}
            <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Base Type:</span>
                <span className="font-semibold text-white">{currentType.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Features Count:</span>
                <span className="font-semibold text-white">{selectedFeatures.length} Added</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Timeline Mode:</span>
                <span className="font-semibold text-white">{isExpedited ? 'Expedited' : 'Standard'}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookWithSpec}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
              >
                <span>Request Spec & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
