import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ArrowRight, Phone, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [quickSent, setQuickSent] = useState(false);
  const [isQuickSending, setIsQuickSending] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    setIsQuickSending(true);

    try {
      await fetch('https://formsubmit.co/ajax/glorytechnologies7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: quickEmail,
          inquiryType: 'Rate Card & Discovery Callback Request',
          _subject: `New Callback Lead for Glory Technologies: ${quickEmail}`,
          timestamp: new Date().toISOString()
        })
      });
    } catch (err) {
      // Continue
    } finally {
      setIsQuickSending(false);
      setQuickSent(true);
      setTimeout(() => {
        setQuickSent(false);
        setQuickEmail('');
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-[#060B18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#09122C] to-[#0A1A3F] border border-blue-900/60 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Get In Touch</span>
                <span className="text-slate-600">·</span>
                <span>Glory Technologies</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Have a Web Development or Coding Project in Mind?
              </h2>

              <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                Whether you need a brand-new custom website, a high-scale web application, or optimization of your existing codebase, Glory Technologies is ready to build it.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:glorytechnologies7@gmail.com?subject=Project%20Inquiry%20-%20Glory%20Technologies"
                  className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/40 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 text-cyan-200" />
                  <span>Email: glorytechnologies7@gmail.com</span>
                </a>

                <a
                  href="tel:+263771193628"
                  className="px-4 py-3.5 text-xs font-semibold text-emerald-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call / WhatsApp: +263 77 119 3628</span>
                </a>

                <a
                  href="tel:0783747554"
                  className="px-4 py-3.5 text-xs font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>0783747554</span>
                </a>

                <button
                  onClick={onOpenModal}
                  className="px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Interactive Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Quick Inbound Request Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Fast Discovery Callback
                </h3>
                <p className="text-xs text-slate-400">
                  Drop your email and our engineering director will send our technical rate card and scheduling calendar.
                </p>
              </div>

              {!quickSent ? (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      required
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isQuickSending}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isQuickSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending to glorytechnologies7@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Me the Rate Card</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! We've received your email and will follow up shortly.</span>
                </div>
              )}

              <div className="text-[11px] text-slate-400 text-center pt-1">
                Strict privacy guarantee · No spam · Technical consultation only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
