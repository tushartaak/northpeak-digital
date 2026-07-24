import React from 'react';
import { Globe, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f1f5f9] w-full py-16 border-t border-slate-200 mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2e5bff] text-white flex items-center justify-center font-black text-lg">
                N
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#0f172a]">
                North<span className="text-[#2e5bff]">Peak</span>
              </span>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Elevating the digital landscape through design and technology excellence.
            </p>
            <div className="pt-2">
              <p className="text-xs text-[#94a3b8] italic">Built for Digital Heroes Training Task</p>
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#2e5bff] hover:underline font-mono"
              >
                digitalheroesco.com
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h5 className="text-[#0f172a] font-bold text-base">Company</h5>
            <nav className="flex flex-col space-y-2 text-sm text-[#64748b]">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigateToSection('hero'); }} className="hover:text-[#2e5bff] transition-colors">About Us</a>
              <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigateToSection('hero'); }} className="hover:text-[#2e5bff] transition-colors">Careers</a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); onNavigateToSection('testimonials'); }} className="hover:text-[#2e5bff] transition-colors">Success Stories</a>
            </nav>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h5 className="text-[#0f172a] font-bold text-base">Services</h5>
            <nav className="flex flex-col space-y-2 text-sm text-[#64748b]">
              <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateToSection('services'); }} className="hover:text-[#2e5bff] transition-colors">Development</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateToSection('services'); }} className="hover:text-[#2e5bff] transition-colors">UI/UX Design</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); onNavigateToSection('services'); }} className="hover:text-[#2e5bff] transition-colors">AI Solutions</a>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h5 className="text-[#0f172a] font-bold text-base">Legal</h5>
            <nav className="flex flex-col space-y-2 text-sm text-[#64748b]">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigateToSection('hero'); }} className="hover:text-[#2e5bff] transition-colors">Privacy Policy</a>
              <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigateToSection('hero'); }} className="hover:text-[#2e5bff] transition-colors">Terms of Service</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigateToSection('contact'); }} className="hover:text-[#2e5bff] transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#64748b]">
          <span>© 2024 NorthPeak Digital. Built by Digital Heroes.</span>

          <div className="flex items-center gap-6">
            <a href="https://northpeak.digital" target="_blank" rel="noreferrer" className="hover:text-[#2e5bff] transition-colors flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>Web</span>
            </a>
            <a href="mailto:hello@northpeak.digital" className="hover:text-[#2e5bff] transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white rounded-lg border border-slate-200 hover:text-[#2e5bff] transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
