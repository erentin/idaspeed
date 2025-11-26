export type Language = 'en' | 'tr' | 'bg' | 'ru';

export interface LocalizedText {
  en: string;
  tr: string;
  bg: string;
  ru: string;
}

export interface ServiceItem {
  title: LocalizedText;
  desc: LocalizedText;
  icon: string;
}

export interface RouteItem {
  title: LocalizedText;
  desc: LocalizedText;
  time: LocalizedText;
}

export interface FeatureItem {
  title: LocalizedText;
  desc: LocalizedText;
}

export interface IndustryItem {
  name: LocalizedText;
  desc: LocalizedText;
  icon: string;
}

export interface TestimonialItem {
  company: string;
  quote: LocalizedText;
  author: string;
}

export interface TrackingContent {
  title: LocalizedText;
  desc: LocalizedText;
  placeholder: LocalizedText;
  button: LocalizedText;
  steps: {
    pickup: LocalizedText;
    transit: LocalizedText;
    customs: LocalizedText;
    delivered: LocalizedText;
  };
}

export interface ProcessStep {
  title: LocalizedText;
  desc: LocalizedText;
}

export interface ProcessContent {
  title: LocalizedText;
  steps: ProcessStep[];
}

export interface TestimonialsContent {
  title: LocalizedText;
  items: TestimonialItem[];
}

export interface Content {
  nav: {
    about: LocalizedText;
    services: LocalizedText;
    routes: LocalizedText;
    contact: LocalizedText;
    quote: LocalizedText;
  };
  hero: {
    headline: LocalizedText;
    subheadline: LocalizedText;
    ctaPrimary: LocalizedText;
    ctaSecondary: LocalizedText;
  };
  about: {
    title: LocalizedText;
    desc1: LocalizedText;
    desc2: LocalizedText;
  };
  tracking: TrackingContent;
  process: ProcessContent;
  services: {
    title: LocalizedText;
    items: ServiceItem[];
  };
  routes: {
    title: LocalizedText;
    desc: LocalizedText;
    items: RouteItem[];
  };
  whyUs: {
    title: LocalizedText;
    items: FeatureItem[];
  };
  industries: {
    title: LocalizedText;
    items: IndustryItem[];
  };
  testimonials: TestimonialsContent;
  quote: {
    title: LocalizedText;
    subtitle: LocalizedText;
    fields: {
      company: LocalizedText;
      contactPerson: LocalizedText;
      email: LocalizedText;
      phone: LocalizedText;
      origin: LocalizedText;
      destination: LocalizedText;
      cargo: LocalizedText;
    };
    submit: LocalizedText;
  };
  contact: {
    title: LocalizedText;
    subtitle: LocalizedText;
    offices: {
      sofia: LocalizedText;
      istanbul: LocalizedText;
      moscow: LocalizedText;
    }
  };
  footer: {
    about: LocalizedText;
    copyright: LocalizedText;
    privacy: LocalizedText;
    terms: LocalizedText;
  };
}