import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';
import { Check, Sparkles, ArrowRight, Calculator } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenEstimator: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onOpenEstimator }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto bg-[#f1f5f9]/70 rounded-[32px] sm:rounded-[40px] my-12 border border-slate-200/80">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
          Transparent Pricing
        </h2>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Choose the level of partnership that fits your current growth trajectory.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="inline-flex items-center gap-3 p-1.5 bg-white rounded-full border border-slate-200 shadow-xs mt-4">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              !isAnnual ? 'bg-[#2e5bff] text-white shadow-xs' : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              isAnnual ? 'bg-[#2e5bff] text-white shadow-xs' : 'text-[#64748b] hover:text-[#0f172a]'
            }`}
          >
            <span>Annual</span>
            <span className="text-[10px] font-mono uppercase bg-[#eef2ff] text-[#2e5bff] px-2 py-0.5 rounded-full font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.popular;
          let displayPrice = plan.monthlyPrice;
          if (typeof plan.monthlyPrice === 'number' && isAnnual) {
            displayPrice = Math.round(plan.monthlyPrice * 0.8);
          }

          return (
            <div
              key={plan.id}
              className={`glass-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between h-full bg-white relative transition-all ${
                isPopular
                  ? 'border-[#2e5bff] ring-4 ring-[#2e5bff]/10 shadow-xl scale-[1.02] z-10'
                  : 'border-slate-200'
              }`}
            >
              {/* Most Popular Badge */}
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2e5bff] text-white px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-md shadow-[#2e5bff]/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-1">{plan.name}</h3>
                  <p className="text-[#475569] text-sm">{plan.subtitle}</p>
                </div>

                {/* Price Display */}
                <div className="mb-8">
                  {typeof displayPrice === 'number' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#0f172a]">
                        ${displayPrice.toLocaleString()}
                      </span>
                      <span className="text-[#64748b] font-medium text-base">/mo</span>
                    </div>
                  ) : (
                    <div className="text-4xl sm:text-5xl font-extrabold text-[#0f172a]">
                      Custom
                    </div>
                  )}
                  {isAnnual && typeof plan.monthlyPrice === 'number' && (
                    <span className="text-xs text-[#2e5bff] font-mono font-semibold block mt-1">
                      Billed annually (Save ${(plan.monthlyPrice * 0.2 * 12).toLocaleString()}/yr)
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#0f172a] text-sm sm:text-base">
                      <div className="p-0.5 bg-[#eef2ff] rounded-full text-[#2e5bff] mt-0.5 shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                  isPopular
                    ? 'bg-[#2e5bff] text-white hover:brightness-110 shadow-lg shadow-[#2e5bff]/25'
                    : 'bg-transparent border-2 border-[#2e5bff] text-[#2e5bff] hover:bg-[#2e5bff]/5'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Interactive Estimator Callout */}
      <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#eef2ff] rounded-xl text-[#2e5bff]">
            <Calculator className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#0f172a]">Need a customized scope?</h4>
            <p className="text-sm text-[#475569]">Try our interactive Project Scope Estimator for real-time cost & delivery metrics.</p>
          </div>
        </div>
        <button
          onClick={onOpenEstimator}
          className="px-6 py-3 bg-[#eef2ff] text-[#2e5bff] hover:bg-[#e0e7ff] font-bold rounded-xl text-sm transition-colors cursor-pointer shrink-0"
        >
          Open Scope Calculator
        </button>
      </div>
    </section>
  );
};
