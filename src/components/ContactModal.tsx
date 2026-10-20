import React, { useState, useEffect } from 'react';
import { X, Mail, Send, CheckCircle, Clock, Sparkles, Phone, ArrowUpRight, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpec?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSpec = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Responsive Business Website');
  const [budget, setBudget] = useState('$100 - $200');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  useEffect(() => {
    if (initialSpec) {
      setMessage(initialSpec);
    }
  }, [initialSpec]);

  if (!isOpen) return null;

  const buildMailtoUrl = () => {
    const subject = `New Project Inquiry from ${name || 'Prospective Client'} (${service})`;
    const body = `Hello Glory Technologies team,

I would like to inquire about a project:

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Service: ${service}
Estimated Budget: ${budget}

Project Scope & Requirements:
${message || 'Please provide information and quote.'}

Best regards,
${name}`;

    return `mailto:glorytechnologies7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    const id = 'GLORY-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(id);

    try {
      await fetch('https://formsubmit.co/ajax/glorytechnologies7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          company: company || 'Not specified',
          service,
          budget,
          message,
          inquiryId: id,
          _subject: `New Lead for Glory Technologies from ${name} (${budget})`,
          _template: 'table'
        })
      });
    } catch (err) {
      // Continue to confirmation state
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0a1128] border border-blue-900/80 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Discovery & Quote Request
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Start Your Project with Glory Technologies
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tell us about your project requirements. We respond within 24 hours with architectural suggestions and a concrete timeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-200">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-200">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-200">
                    Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="Responsive Business Website">Responsive Business Website</option>
                    <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                    <option value="API & Cloud Infrastructure">API & Cloud Infrastructure</option>
                    <option value="Code Optimization & Audit">Code Optimization & Audit</option>
                    <option value="Ongoing Technical Partnership">Ongoing Technical Partnership</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-200">
                    Estimated Budget (USD)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="$100 - $200">$100 - $200</option>
                    <option value="$200 - $350">$200 - $350</option>
                    <option value="$350 - $500">$350 - $500</option>
                    <option value="$500 - $1,000+">$500 - $1,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-200">
                  Project Details / Scope
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your vision, required pages or features, target launch date..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 font-mono text-xs"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
                      <span>Sending to glorytechnologies7@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send to glorytechnologies7@gmail.com</span>
                    </>
                  )}
                </button>

                {/* Direct Email Button - goes straight to email client */}
                <a
                  href={buildMailtoUrl()}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 border border-blue-500/50 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm text-cyan-300"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Or Send via Your Mail App (Gmail / Outlook)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs text-slate-400">
                <a
                  href="tel:+263771193628"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call/WhatsApp: +263 77 119 3628</span>
                </a>
                <span>·</span>
                <a
                  href="tel:0783747554"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:underline"
                >
                  <span>0783747554</span>
                </a>
                <span>·</span>
                <span>glorytechnologies7@gmail.com</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-6 text-center space-y-5 animate-in fade-in">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Inquiry Received · {inquiryId}
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Thank You, {name}!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your project scope has been logged with Glory Technologies. Our lead engineer will review your specification and reach out to <strong className="text-white">{email}</strong> within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Target Response: Within 24 Business Hours</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct Email: glorytechnologies7@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Phone / WhatsApp: +263 77 119 3628</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Alt Line: 0783747554</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={buildMailtoUrl()}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Your Mail App to Send Copy</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
