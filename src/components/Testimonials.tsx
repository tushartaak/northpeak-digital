import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Testimonial } from '../types';
import { Star, Quote, ExternalLink } from 'lucide-react';

interface TestimonialsProps {
  onSelectTestimonial: (testimonial: Testimonial) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onSelectTestimonial }) => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto my-12">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
          Client Success Stories
        </h2>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          We&apos;ve helped industry leaders redefine their digital presence. Here&apos;s what they have to say.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((t, index) => (
          <div
            key={t.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelectTestimonial(t)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectTestimonial(t);
              }
            }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full group cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-[#2e5bff]"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#2e5bff] mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2e5bff]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0f172a] text-lg font-normal italic leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-4">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#2e5bff]/30 group-hover:ring-[#2e5bff] transition-all"
                />
                <div>
                  <div className="font-bold text-[#0f172a] text-base">{t.author}</div>
                  <div className="text-xs font-mono text-[#2e5bff] uppercase font-semibold tracking-wider">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>

              <div className="p-2 text-[#64748b] group-hover:text-[#2e5bff] transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
