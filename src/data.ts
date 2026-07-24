import { ServiceItem, Testimonial, PricingPlan } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    iconName: 'code',
    title: 'Web Development',
    description: 'Highly performant, scalable web applications built with the latest reactive frameworks and cloud-native architecture.',
    fullDescription: 'We engineer web applications from the ground up prioritizing speed, security, and developer ergonomics. Utilizing React, Next.js, TypeScript, and serverless edge computing, we deliver sub-second response times and bulletproof fault tolerance.',
    features: [
      'Full-Stack React & Serverless Node.js',
      'API Integration & GraphQL/REST Architectures',
      'High-Concurrency Edge Deployment',
      'Comprehensive Automated Testing Suites'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind CSS', 'Cloud Native']
  },
  {
    id: 'ui-ux',
    iconName: 'design',
    title: 'UI/UX Design',
    description: 'Intuitive user journeys and visually stunning interfaces that minimize friction and maximize engagement.',
    fullDescription: 'Our design methodology combines empirical user research with avant-garde aesthetics. We craft design systems, component libraries, and interactive prototypes designed to maximize conversion and user retention.',
    features: [
      'Interactive Design Systems & Figma Libraries',
      'User Journey Mapping & Friction Audit',
      'Micro-interactions & Responsive Motion',
      'WCAG AAA Accessibility Compliance'
    ],
    techStack: ['Figma', 'Design Tokens', 'Tailwind', 'Motion', 'Prototyping']
  },
  {
    id: 'branding',
    iconName: 'branding',
    title: 'Branding',
    description: 'Developing cohesive visual identities that resonate with your target audience and command market presence.',
    fullDescription: 'A brand is more than a logo; it is the total sensory experience of your company. We build complete brand books, typography systems, vector assets, and digital marketing collateral to distinguish you from competitors.',
    features: [
      'Visual Identity & Logo Creation',
      'Comprehensive Brand Guidelines',
      'Typography & Color Palette Curation',
      'Digital & Print Asset Ecosystem'
    ],
    techStack: ['Vector Art', 'Typography', 'Brand Architecture', 'Color Systems']
  },
  {
    id: 'seo',
    iconName: 'seo',
    title: 'SEO',
    description: 'Strategic search engine optimization that puts your platform in front of the people who matter most.',
    fullDescription: 'Technical SEO, content strategy, and semantic web structure aligned to modern search engine algorithms. We ensure your application ranks at the top for high-intent organic traffic.',
    features: [
      'Technical Core Web Vitals Optimization',
      'Structured Schema Markup & Metadata',
      'Competitive Keyword Engineering',
      'Real-time Analytics & Ranking Reports'
    ],
    techStack: ['Lighthouse', 'JSON-LD', 'Schema.org', 'Search Console', 'Analytics']
  },
  {
    id: 'mobile-apps',
    iconName: 'mobile',
    title: 'Mobile Apps',
    description: 'Cross-platform and native mobile experiences that leverage full hardware capabilities for fluid interaction.',
    fullDescription: 'Seamless mobile applications for iOS and Android built for extreme responsiveness. We harness camera, push notifications, offline storage, and biometric auth for frictionless native experiences.',
    features: [
      'iOS & Android Cross-Platform Deployment',
      'Offline-First Local Data Storage',
      'Biometric Auth & Hardware Integration',
      'App Store Optimization & Submissions'
    ],
    techStack: ['React Native', 'Expo', 'iOS / Swift', 'Android / Kotlin']
  },
  {
    id: 'ai-automation',
    iconName: 'ai',
    title: 'AI Automation',
    description: 'Integrating intelligent agents and automated workflows to streamline operations and enhance decision making.',
    fullDescription: 'Deploy customized LLMs, automated workflow pipelines, vector database search engines, and generative AI features seamlessly into your existing product ecosystem.',
    features: [
      'Custom Gemini & Agent Integration',
      'RAG Pipelines & Vector Search Engines',
      'Workflow Automation & Webhook Bots',
      'Predictive Analytics & Data Mining'
    ],
    techStack: ['Gemini API', 'LangChain', 'Python/Node', 'Vector DBs', 'Webhooks']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: '"NorthPeak transformed our legacy platform into a high-converting machine. Their attention to detail in UI/UX is unmatched."',
    author: 'James Chen',
    role: 'CTO',
    company: 'NEXAFLOW',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVd7xrpvigFpKCyMtMJrMMPvcZQkx4abZSktZzloMkUhc0xOx83hTGItIMwZhsNco5vKw81wH-XLUrCtcPbrad4JOQzcZtByeqLk7VwxmZcHW6IVW63cXD7bXeG0t1yVV01wh2yXG0UAD0wHo6XoqFmFXhvjniPLU8qMawAgruJ2Uz-SR1utYcWsPVtBCTWpm6UWFLoSRiq4QzC8yLlYdpiU5PtdPs78xryvmsQnXw5irbVave7MpNKGtFgpTy54aa-UM9B7W991w',
    rating: 5
  },
  {
    id: 't2',
    quote: '"The branding work alone paid for itself within the first quarter. We finally have a digital identity that matches our premium service."',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'LUMINA BRANDS',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14MLmV4KlAHz37tJVYs3NcqYtU6rTeS3Az6rMKE4Kdu2JriOOK2YMH3uvUAnR_C_ABG_SyCiQhaWxI_ogO_mKY9TNGSUT69t4VRsH7qtliwbC_LrGA0xub_kX-lYSmfUXdPVr7wpHeK_EtzrD8sXwvS0kEXeDnPTt94goW6EhvozL6eo0QmOFCWBKadpMEBga8qPUPpEHKniXBVs5npTQv3bwqbF-xFYdCiPowCGivcbBvQODelsZe9ckgDh2Nu3t3q_LwsgaZv8',
    rating: 5
  },
  {
    id: 't3',
    quote: '"Working with their engineering team was a breath of fresh air. They understand scalability better than any agency we\'ve used."',
    author: 'Marcus Thorne',
    role: 'PRODUCT LEAD',
    company: 'HORIZON',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL_8Bx2J-R9xySAhRJqRf2WQKCSadI1gCBWOX0EQk7Nhp_RkzDDRlsMnbHv-uj_0eaDx0rGcvLOh5djSS5F3UWqcusOEOKSXSXf_5i_JSCeSzIKWU6fQsLsuKmeuLUOsPwq3EeUpjb-Je4spCRrHDMnaizsTq-Ier5O2wldG3jSBNJ-ifZO7aw8GQee6vx69kTgh0LKhcLSZO2rjI3geC7P78zkhyuPDILotFP6Q97C2ebX9vcbfmLrzrFhFYjzyO5rLvZVSS9ZRU',
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Ideal for emerging startups.',
    monthlyPrice: 1999,
    features: [
      'Brand Identity Core',
      '3-Page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Monthly Strategy Call'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'Complete digital transformation.',
    monthlyPrice: 4999,
    popular: true,
    features: [
      'Custom Web Application',
      'UI/UX System Design',
      'Performance Optimization',
      'Advanced SEO & Analytics',
      'Weekly Sprint Reviews'
    ],
    ctaText: 'Scale Now'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Custom-tailored solutions.',
    monthlyPrice: 'Custom',
    features: [
      'Full-Stack Product Development',
      'AI & Automation Integration',
      'Dedicated Engineering Team',
      '24/7 Priority Support',
      'Strategic Infrastructure Audits'
    ],
    ctaText: 'Contact Sales'
  }
];

export const ASYMMETRIC_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtnhMazvGq_Hu9GBr_24TFacRB7oJ6XydS3f4Sk2KV2yGyCXkglre5rUMNkULXpUNueSd_RJZRpx4uAWEp8_9sCoO7vK2w_uKjDbqaCvBECJC9u1XB2qB8uugNM03Z73XjdlefTIelHZ8lmweXW5Xw_E_JOlbmJq_djmzqOfg8YZ7fsaLb0sABV8vWw9_iYXphr8cy5wE2BUZBIUgUcxhFb_ZSxpEKlnCjD50_37QA_aOZMJhawCTe6qJVFRrGoLq7Tct0AA4-M_4';
