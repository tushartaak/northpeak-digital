import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, X } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  selectedPlanName?: string;
  onClearSelectedPlan?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlanName,
  onClearSelectedPlan,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    selectedPlan: selectedPlanName || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlanName) {
      setFormData((prev) => ({ ...prev, selectedPlan: selectedPlanName }));
    }
  }, [selectedPlanName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        selectedPlan: '',
      });
      if (onClearSelectedPlan) onClearSelectedPlan();

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eef2ff] text-[#2e5bff] rounded-full text-xs font-mono font-medium mb-4 border border-[#2e5bff]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-4">
              Ready to scale?
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              Drop us a line and let&apos;s discuss how we can build the future of your brand together.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#eef2ff] flex items-center justify-center text-[#2e5bff] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#64748b] font-semibold">Email Us</div>
                <a
                  href="mailto:hello@northpeak.digital"
                  className="text-base font-semibold text-[#0f172a] hover:text-[#2e5bff] transition-colors"
                >
                  hello@northpeak.digital
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-[#eef2ff] flex items-center justify-center text-[#2e5bff] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#64748b] font-semibold">Global Studios</div>
                <span className="text-base font-semibold text-[#0f172a]">
                  Silicon Valley • New York • Remote
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-card-static p-8 sm:p-10 rounded-2xl space-y-6 shadow-xl border border-slate-200/90 relative"
          >
            {/* Plan Badge if selected */}
            {selectedPlanName && (
              <div className="p-3 bg-[#eef2ff] border border-[#2e5bff]/30 rounded-xl flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-[#2e5bff] font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Selected Package: <strong>{selectedPlanName}</strong></span>
                </div>
                {onClearSelectedPlan && (
                  <button
                    type="button"
                    onClick={onClearSelectedPlan}
                    className="p-1 hover:bg-[#2e5bff]/10 rounded-full text-[#2e5bff] cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase font-semibold text-[#475569]">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-base focus:border-[#2e5bff] focus:ring-2 focus:ring-[#2e5bff]/20 outline-none transition-all text-[#0f172a]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase font-semibold text-[#475569]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-base focus:border-[#2e5bff] focus:ring-2 focus:ring-[#2e5bff]/20 outline-none transition-all text-[#0f172a]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-mono uppercase font-semibold text-[#475569]">
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme Corp"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-base focus:border-[#2e5bff] focus:ring-2 focus:ring-[#2e5bff]/20 outline-none transition-all text-[#0f172a]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase font-semibold text-[#475569]">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project goals, timelines, or requirements..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-base focus:border-[#2e5bff] focus:ring-2 focus:ring-[#2e5bff]/20 outline-none transition-all text-[#0f172a] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#2e5bff] text-white font-bold text-base rounded-xl hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-[#2e5bff]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Message received! We&apos;ll get back to you within 24 hours.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
