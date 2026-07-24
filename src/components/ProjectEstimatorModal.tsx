import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (planName: string, estimatedPrice: number) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'ai' | 'fullstack'>('web');
  const [timeline, setTimeline] = useState<'standard' | 'accelerated' | 'sprint'>('standard');
  const [addons, setAddons] = useState<string[]>(['seo']);

  if (!isOpen) return null;

  const basePrices = {
    web: 2500,
    mobile: 3500,
    ai: 4000,
    fullstack: 6000,
  };

  const timelineMultipliers = {
    standard: 1.0,
    accelerated: 1.25,
    sprint: 1.6,
  };

  const addonPrices: Record<string, number> = {
    seo: 500,
    design: 800,
    qa: 600,
    sla: 1000,
  };

  let totalEstimate = basePrices[projectType] * timelineMultipliers[timeline];
  addons.forEach((addon) => {
    totalEstimate += addonPrices[addon] || 0;
  });

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    const titleMap = {
      web: 'Custom Web Application Scope',
      mobile: 'Mobile App Architecture Scope',
      ai: 'AI & Automation Suite Scope',
      fullstack: 'Full-Stack Enterprise Scope',
    };
    onApplyEstimate(titleMap[projectType], Math.round(totalEstimate));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#eef2ff] rounded-xl text-[#2e5bff]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0f172a]">Interactive Scope Estimator</h3>
              <p className="text-xs text-[#64748b]">Configure your project parameters for instant budgetary feedback</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close estimator modal"
            className="p-2 hover:bg-slate-100 rounded-lg text-[#64748b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2e5bff]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Project Type */}
        <div className="space-y-3">
          <label className="block text-xs font-mono uppercase font-semibold text-[#475569]">
            1. Select Primary Service Architecture
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'web', label: 'Web App', price: '$2,500+' },
              { id: 'mobile', label: 'Mobile App', price: '$3,500+' },
              { id: 'ai', label: 'AI Suite', price: '$4,000+' },
              { id: 'fullstack', label: 'Full-Stack', price: '$6,000+' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setProjectType(item.id as any)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  projectType === item.id
                    ? 'border-[#2e5bff] bg-[#eef2ff] text-[#2e5bff] font-bold shadow-xs'
                    : 'border-slate-200 text-[#0f172a] hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-bold">{item.label}</div>
                <div className="text-xs font-mono text-[#64748b]">{item.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Timeline Speed */}
        <div className="space-y-3">
          <label className="block text-xs font-mono uppercase font-semibold text-[#475569]">
            2. Delivery Urgency
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'standard', label: 'Standard', time: '4-6 Weeks', desc: '1.0x Rate' },
              { id: 'accelerated', label: 'Accelerated', time: '2-3 Weeks', desc: '1.25x Rate' },
              { id: 'sprint', label: 'Rapid Sprint', time: '1-2 Weeks', desc: '1.6x Rate' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTimeline(item.id as any)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  timeline === item.id
                    ? 'border-[#2e5bff] bg-[#eef2ff] text-[#2e5bff] font-bold'
                    : 'border-slate-200 text-[#0f172a] hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-bold">{item.label}</div>
                <div className="text-xs font-mono text-[#64748b]">{item.time}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Add-ons */}
        <div className="space-y-3">
          <label className="block text-xs font-mono uppercase font-semibold text-[#475569]">
            3. Optional Modular Enhancements
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'seo', label: 'Advanced Technical SEO & Schema', price: '+$500' },
              { id: 'design', label: 'Figma Design System & Tokens', price: '+$800' },
              { id: 'qa', label: 'Automated E2E Testing Suite', price: '+$600' },
              { id: 'sla', label: '24/7 Dedicated SLA Support', price: '+$1,000' },
            ].map((item) => {
              const active = addons.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleAddon(item.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    active
                      ? 'border-[#2e5bff] bg-[#eef2ff]/70 text-[#2e5bff] font-semibold'
                      : 'border-slate-200 text-[#0f172a]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        active ? 'bg-[#2e5bff] border-[#2e5bff] text-white' : 'border-slate-300'
                      }`}
                    >
                      {active && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-xs sm:text-sm">{item.label}</span>
                  </div>
                  <span className="text-xs font-mono text-[#64748b]">{item.price}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Estimate Summary Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl">
          <div>
            <div className="text-xs font-mono uppercase text-[#64748b]">Estimated Investment</div>
            <div className="text-3xl font-extrabold text-[#0f172a]">
              ${Math.round(totalEstimate).toLocaleString()}{' '}
              <span className="text-xs font-normal text-[#64748b]">est. total</span>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="w-full sm:w-auto px-6 py-3 bg-[#2e5bff] text-white font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#2e5bff]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply to Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
