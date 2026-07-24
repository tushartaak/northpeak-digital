import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calculator } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onNavigateToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'services', 'testimonials', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: 'services' },
    { name: 'Success Stories', href: 'testimonials' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="flex justify-between items-center px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto"
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-[#2e5bff] text-white flex items-center justify-center font-black text-xl shadow-md shadow-[#2e5bff]/20 group-hover:scale-105 transition-transform">
            N
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-[#0f172a]">
            North<span className="text-[#2e5bff]">Peak</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`font-medium text-base transition-colors duration-200 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#2e5bff] font-semibold'
                    : 'text-[#475569] hover:text-[#2e5bff]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2e5bff] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenEstimator}
            className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#2e5bff] bg-[#eef2ff] hover:bg-[#e0e7ff] rounded-lg transition-colors border border-[#2e5bff]/10 cursor-pointer"
            title="Calculate project estimates"
          >
            <Calculator className="w-4 h-4" />
            <span>Estimator</span>
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="bg-[#2e5bff] text-white px-6 py-2.5 rounded-lg font-semibold active:scale-95 transition-all duration-200 hover:brightness-110 shadow-md shadow-[#2e5bff]/20 cursor-pointer flex items-center gap-1.5"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenEstimator}
            className="p-2 text-[#2e5bff] bg-[#eef2ff] rounded-lg border border-[#2e5bff]/20"
            aria-label="Open Estimator"
          >
            <Calculator className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0f172a] hover:text-[#2e5bff] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-left text-lg font-medium py-2 border-b border-slate-100 ${
                  activeSection === link.href ? 'text-[#2e5bff] font-semibold' : 'text-[#0f172a]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#eef2ff] text-[#2e5bff] rounded-lg font-semibold border border-[#2e5bff]/20"
            >
              <Calculator className="w-5 h-5" />
              <span>Project Estimator</span>
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 bg-[#2e5bff] text-white rounded-lg font-bold shadow-md shadow-[#2e5bff]/20 flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
