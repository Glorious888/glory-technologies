import React, { useState } from 'react';
import { Terminal, Copy, Check, ShieldCheck, Zap, Code2 } from 'lucide-react';

export const LiveCodeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'api' | 'schema'>('frontend');
  const [copied, setCopied] = useState(false);

  const snippets = {
    frontend: `// Glory Technologies - Production-Grade React Component
import React, { useState, useTransition } from 'react';

interface ProjectInquiryProps {
  clientId: string;
  onSuccess: (confirmationId: string) => void;
}

export const ModernProjectPortal: React.FC<ProjectInquiryProps> = ({ clientId, onSuccess }) => {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'ready'>('idle');

  const handleDeploy = async (spec: ProjectSpec) => {
    startTransition(async () => {
      setStatus('submitting');
      const response = await fetch('/api/v1/projects/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, spec, timestamp: Date.now() })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('ready');
        onSuccess(data.projectId);
      }
    });
  };

  return (
    <div className="rounded-xl border border-blue-500/30 bg-slate-900/90 p-6">
      <h3 className="font-bold text-white text-lg">Glory Tech Architecture</h3>
      {/* Zero AI slop, strict types, responsive DOM */}
    </div>
  );
};`,
    api: `// Glory Technologies - Secure Express / Node.js API Route
import express, { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const router = express.Router();

const ProjectSpecSchema = z.object({
  clientId: z.string().uuid(),
  projectName: z.string().min(3).max(100),
  budgetTier: z.enum(['starter', 'growth', 'enterprise']),
  techRequirements: z.array(z.string()).nonempty()
});

router.post('/api/projects/create', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = ProjectSpecSchema.parse(req.body);
    const project = await db.project.create({
      data: {
        ...validated,
        status: 'DISCOVERY_IN_PROGRESS',
        createdAt: new Date()
      }
    });
    return res.status(201).json({ success: true, project });
  } catch (error) {
    return next(error);
  }
});`,
    schema: `// Glory Technologies - Scalable PostgreSQL Schema
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE web_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  framework VARCHAR(64) DEFAULT 'React/TypeScript' NOT NULL,
  deployment_status VARCHAR(32) DEFAULT 'ACTIVE' NOT NULL,
  lighthouse_score SMALLINT CHECK (lighthouse_score BETWEEN 0 AND 100),
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX idx_web_projects_client ON web_projects(client_id);`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#070E20] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Code Standards explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Clean Code Architecture
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              We Write Code You Will Be Proud to Own.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every line of code written by Glory Technologies adheres to rigorous modern standards: 100% strict TypeScript types, defensive error boundaries, secure validation schemas, and modular component isolation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Strict Type Safety</div>
                  <div className="text-xs text-slate-400">Zero vague `any` types; complete compile-time guarantee across client and server.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">High Runtime Speed</div>
                  <div className="text-xs text-slate-400">Optimized bundle splitting and minimal re-renders for buttery-smooth 60fps performance.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Maintainable & Documented</div>
                  <div className="text-xs text-slate-400">Clean architecture that your internal team or any developer can navigate and expand easily.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox View */}
          <div className="lg:col-span-7 rounded-2xl bg-[#091124] border border-slate-800 shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#060B18] border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">glory-tech-standards.ts</span>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Snippet'}</span>
              </button>
            </div>

            {/* Code Selector Tabs */}
            <div className="flex items-center border-b border-slate-800/80 px-4 bg-slate-950/40 overflow-x-auto">
              <button
                onClick={() => setActiveTab('frontend')}
                className={`py-2.5 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'frontend'
                    ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                React & TypeScript UI
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`py-2.5 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'api'
                    ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                Secure Node.js API
              </button>
              <button
                onClick={() => setActiveTab('schema')}
                className={`py-2.5 px-3 text-xs font-mono font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'schema'
                    ? 'border-blue-500 text-blue-400 bg-blue-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                PostgreSQL Schema
              </button>
            </div>

            {/* Code Display */}
            <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto max-h-[380px] leading-relaxed">
              <pre>
                <code>{snippets[activeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
