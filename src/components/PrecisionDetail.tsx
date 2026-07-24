import React from 'react';
import { ASYMMETRIC_IMAGE_URL } from '../data';
import { CheckCircle } from 'lucide-react';

export const PrecisionDetail: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-12">
      {/* Left Column: Image with Overlay Badge */}
      <div className="lg:col-span-7">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
          <img
            src={ASYMMETRIC_IMAGE_URL}
            alt="High-tech corporate office interior at night"
            loading="lazy"
            decoding="async"
            className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          {/* Uptime Badge Overlay */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl border border-slate-200/90 shadow-lg">
              <div className="w-3 h-3 bg-[#2e5bff] rounded-full animate-pulse-slow shrink-0" />
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#0f172a]">
                99.9% Platform Uptime Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Text and Specs */}
      <div className="lg:col-span-5 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
          Engineered for Precision
        </h2>

        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          We don&apos;t just build websites; we architect digital infrastructure. Every line of code is optimized for speed, security, and scalability.
        </p>

        <div className="space-y-6 pt-2">
          <div className="flex items-start gap-4">
            <div className="p-1.5 bg-[#eef2ff] rounded-lg text-[#2e5bff] mt-1 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#0f172a] mb-1">Data-First Approach</h4>
              <p className="text-[#475569] text-base leading-relaxed">
                Strategy driven by empirical evidence, telemetry analysis, and market intelligence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-1.5 bg-[#eef2ff] rounded-lg text-[#2e5bff] mt-1 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#0f172a] mb-1">Agile Methodology</h4>
              <p className="text-[#475569] text-base leading-relaxed">
                Iterative development cycles ensuring rapid delivery, transparency, and top-tier quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
