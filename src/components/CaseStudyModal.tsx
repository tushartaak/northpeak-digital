import React, { useEffect } from 'react';
import { Testimonial } from '../types';
import { X, Star, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  testimonial: Testimonial | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  testimonial,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && testimonial) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  const caseStudyDetails: Record<
    string,
    { metrics: Array<{ label: string; value: string }>; challenge: string; solution: string }
  > = {
    t1: {
      metrics: [
        { label: 'Conversion Lift', value: '+310%' },
        { label: 'Page Load Time', value: '180ms' },
        { label: 'Uptime', value: '99.99%' },
      ],
      challenge: 'NEXAFLOW had a legacy monolithic framework causing slow rendering, high bounce rates, and degraded checkout conversions.',
      solution: 'NorthPeak architected a modern React micro-frontend with edge-cached GraphQL API proxies and motion transitions.',
    },
    t2: {
      metrics: [
        { label: 'Brand Recognition', value: '+185%' },
        { label: 'Organic Traffic', value: '4.2x' },
        { label: 'Quarterly ROI', value: '12.5x' },
      ],
      challenge: 'Lumina Brands lacked a unified brand system across digital touchpoints, diluting enterprise credibility.',
      solution: 'We engineered a cohesive Figma design token architecture, vector brand assets, and custom responsive web UI.',
    },
    t3: {
      metrics: [
        { label: 'API Throughput', value: '50k req/s' },
        { label: 'Cost Reduction', value: '-42%' },
        { label: 'Sprint Velocity', value: '2.5x' },
      ],
      challenge: 'Horizon needed an enterprise-grade cloud architecture capable of handling viral traffic spikes without breaking budget limits.',
      solution: 'NorthPeak integrated automated CI/CD pipelines, autoscaling containers, and real-time observability telemetry.',
    },
  };

  const detail = caseStudyDetails[testimonial.id] || caseStudyDetails['t1'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="casestudy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          aria-label="Close modal dialog"
          className="absolute top-5 right-5 p-2 hover:bg-slate-100 rounded-lg text-[#64748b] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2e5bff]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Client Header */}
        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.author}
            loading="lazy"
            decoding="async"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-[#2e5bff]"
          />
          <div>
            <span className="text-xs font-mono uppercase text-[#2e5bff] font-bold">Case Study Spotlight</span>
            <h3 id="casestudy-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
              {testimonial.company}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748b]">
              {testimonial.author} — {testimonial.role}
            </p>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-[#eef2ff] rounded-xl border border-[#2e5bff]/10">
          {detail.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-[#2e5bff]">{m.value}</div>
              <div className="text-[10px] sm:text-[11px] font-mono text-[#64748b] uppercase font-semibold">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-mono uppercase font-semibold text-[#475569] mb-1">The Challenge</h4>
            <p className="text-sm text-[#0f172a] leading-relaxed">{detail.challenge}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase font-semibold text-[#475569] mb-1">NorthPeak Solution</h4>
            <p className="text-sm text-[#0f172a] leading-relaxed">{detail.solution}</p>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="p-4 bg-slate-50 border-l-4 border-[#2e5bff] rounded-r-xl italic text-sm text-[#0f172a]">
          {testimonial.quote}
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
              onRequestQuote();
              onClose();
            }}
            className="px-6 py-2.5 bg-[#2e5bff] text-white rounded-xl text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#2e5bff]/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Achieve Similar Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
