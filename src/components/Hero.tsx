import React from 'react';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onViewWork: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onViewWork, onOpenEstimator }) => {
  return (
    <section id="hero" className="relative min-h-[88vh] lg:min-h-[920px] flex items-center overflow-hidden px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto pt-24 pb-16 lg:py-24">
      {/* 3D Three.js Background Wireframe Mesh */}
      <HeroCanvas />

      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
        <div className="lg:col-span-7 xl:col-span-6 space-y-6">
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-[#0f172a] leading-[1.08] tracking-tight">
            Scaling Digital <br className="hidden sm:inline" />
            <span className="text-[#2e5bff] inline-block relative">
              Horizons
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2e5bff]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#475569] max-w-xl leading-relaxed font-normal">
            We build precision-engineered digital products that elevate brands and drive exponential growth. Experience the pinnacle of full-stack excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="bg-[#2e5bff] text-white px-8 py-4 rounded-xl font-bold text-base active:scale-95 transition-all shadow-lg shadow-[#2e5bff]/25 hover:shadow-xl hover:shadow-[#2e5bff]/35 hover:brightness-110 flex items-center gap-2 cursor-pointer group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewWork}
              className="bg-white/80 backdrop-blur-md border-2 border-[#2e5bff] text-[#2e5bff] px-8 py-4 rounded-xl font-bold text-base active:scale-95 transition-all hover:bg-[#2e5bff]/5 cursor-pointer shadow-xs"
            >
              View Work
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">99.9%</div>
              <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#2e5bff]">100+</div>
              <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider">Deployments</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#0f172a]">Sub-100ms</div>
              <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider">Latency Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
