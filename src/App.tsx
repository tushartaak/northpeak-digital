import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { PrecisionDetail } from './components/PrecisionDetail';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CustomCursor } from './components/CustomCursor';
import { ServiceItem, Testimonial, PricingPlan } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [selectedPlanName, setSelectedPlanName] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanName(`${plan.name} Package`);
    navigateToSection('contact');
  };

  const handleApplyEstimate = (title: string, estimatePrice: number) => {
    setSelectedPlanName(`${title} ($${estimatePrice.toLocaleString()} Est.)`);
    navigateToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#0f172a] font-sans relative selection:bg-[#2e5bff]/20 selection:text-[#2e5bff]">
      {/* Top Navbar */}
      <Navbar
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onNavigateToSection={navigateToSection}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onGetStarted={() => navigateToSection('contact')}
          onViewWork={() => navigateToSection('testimonials')}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* Services Section (Full-Stack Excellence) */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Client Success Stories */}
        <Testimonials
          onSelectTestimonial={(testimonial) => setSelectedTestimonial(testimonial)}
        />

        {/* Transparent Pricing Section */}
        <Pricing
          onSelectPlan={handleSelectPlan}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* Asymmetric Engineered for Precision Section */}
        <PrecisionDetail />

        {/* Contact Form Section */}
        <ContactSection
          selectedPlanName={selectedPlanName}
          onClearSelectedPlan={() => setSelectedPlanName('')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigateToSection={navigateToSection} />

      {/* Modals & Overlays */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => {
          setSelectedPlanName(`${serviceTitle} Engagement`);
          navigateToSection('contact');
        }}
      />

      <CaseStudyModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        onRequestQuote={() => navigateToSection('contact')}
      />

      {/* Custom 3D Cursor Aura toggle */}
      <CustomCursor />
    </div>
  );
}
