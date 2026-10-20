import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ArrowUpRight, X } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-sm">
      {!minimized ? (
        <div className="bg-[#09122C]/95 backdrop-blur-md border border-blue-500/50 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6)] shadow-blue-900/30 text-white space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Quick Reach Out
              </span>
            </div>
            <button
              onClick={() => setMinimized(true)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Minimize contact widget"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Direct Email Button - Goes straight to email client */}
            <a
              href="mailto:glorytechnologies7@gmail.com?subject=Project%20Inquiry%20-%20Glory%20Technologies&body=Hello%20Glory%20Technologies,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20website%20/%20coding%20project:%0D%0A"
              className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-2.5 truncate">
                <div className="p-1.5 rounded-lg bg-blue-700/60 text-white">
                  <Mail className="w-4 h-4 text-cyan-200" />
                </div>
                <div className="text-left truncate">
                  <div className="leading-tight">Email Us Directly</div>
                  <div className="text-[10px] text-blue-200 font-mono truncate">
                    glorytechnologies7@gmail.com
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-cyan-200 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Direct Call / WhatsApp Button - +263 77 119 3628 */}
            <a
              href="tel:+263771193628"
              className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-white text-xs font-semibold transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="leading-tight text-slate-200">Call / WhatsApp</div>
                  <div className="text-[11px] text-emerald-400 font-mono font-bold">
                    +263 77 119 3628
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Direct Call Button - 0783747554 */}
            <a
              href="tel:0783747554"
              className="w-full flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-white text-xs font-semibold transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="leading-tight text-slate-300 text-[11px]">Alt Line</div>
                  <div className="text-[11px] text-slate-200 font-mono">
                    0783747554
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform" />
            </a>
          </div>

          <p className="text-[10px] text-slate-400 text-center pt-0.5">
            Glory Technologies · Instant response
          </p>
        </div>
      ) : (
        /* Minimized Trigger Button */
        <div className="flex items-center gap-2">
          {/* Quick Mail Button */}
          <a
            href="mailto:glorytechnologies7@gmail.com?subject=Project%20Inquiry%20-%20Glory%20Technologies"
            className="p-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/40 border border-blue-400 transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
            title="Email glorytechnologies7@gmail.com"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* Quick Call Button */}
          <a
            href="tel:0783747554"
            className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/40 border border-emerald-400 transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
            title="Call 0783747554"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMinimized(false)}
            className="px-3 py-2 text-xs font-semibold rounded-full bg-slate-900/90 text-slate-200 border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Contact Info
          </button>
        </div>
      )}
    </div>
  );
};
