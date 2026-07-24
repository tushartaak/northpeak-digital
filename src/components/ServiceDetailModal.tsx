import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Code } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          aria-label="Close modal dialog"
          className="absolute top-5 right-5 p-2 hover:bg-slate-100 rounded-lg text-[#64748b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2e5bff]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="p-3 bg-[#eef2ff] rounded-xl w-fit text-[#2e5bff] border border-[#2e5bff]/10">
            <Code className="w-8 h-8" />
          </div>

          <h3 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
            {service.title}
          </h3>

          <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase font-semibold text-[#475569]">
            Core Deliverables & Standards
          </h4>
          <ul className="space-y-2.5">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#0f172a]">
                <CheckCircle2 className="w-5 h-5 text-[#2e5bff] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono uppercase font-semibold text-[#475569]">
            Tech Stack Ecosystem
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#f1f5f9] text-[#0f172a] text-xs font-mono rounded-full border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-[#64748b] text-sm font-semibold hover:bg-slate-50 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onRequestQuote(service.title);
              onClose();
            }}
            className="px-6 py-2.5 bg-[#2e5bff] text-white rounded-xl text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#2e5bff]/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Request {service.title} Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
