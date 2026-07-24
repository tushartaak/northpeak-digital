export interface ServiceItem {
  id: string;
  iconName: 'code' | 'design' | 'branding' | 'seo' | 'mobile' | 'ai';
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number | 'Custom';
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  selectedPlan?: string;
}
