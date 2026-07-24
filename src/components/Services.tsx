import React from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { Code, Layout, Sparkles, Search, Smartphone, Bot, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-9 h-9 text-[#2e5bff]" />;
      case 'design':
        return <Layout className="w-9 h-9 text-[#2e5bff]" />;
      case 'branding':
        return <Sparkles className="w-9 h-9 text-[#2e5bff]" />;
      case 'seo':
        return <Search className="w-9 h-9 text-[#2e5bff]" />;
      case 'mobile':
        return <Smartphone className="w-9 h-9 text-[#2e5bff]" />;
      case 'ai':
        return <Bot className="w-9 h-9 text-[#2e5bff]" />;
      default:
        return <Code className="w-9 h-9 text-[#2e5bff]" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] my-12 border border-slate-200/80 shadow-xs">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
          Full-Stack Excellence
        </h2>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          From initial concept to deployment, we provide end-to-end digital solutions that define the industry standard.
        </p>
      </div>

      {/* Services Grid (6 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelectService(service)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService(service);
              }
            }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between cursor-pointer group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#2e5bff]"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div>
              <div className="p-3 bg-[#eef2ff] rounded-xl w-fit mb-6 border border-[#2e5bff]/10 group-hover:scale-110 transition-transform">
                {getIcon(service.iconName)}
              </div>

              <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#2e5bff] transition-colors">
                {service.title}
              </h3>

              <p className="text-[#475569] text-base leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#2e5bff]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#64748b] group-hover:text-[#2e5bff] transition-colors">
                Explore Deliverables
              </span>
              <div className="w-8 h-8 rounded-full bg-[#eef2ff] flex items-center justify-center group-hover:bg-[#2e5bff] group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
