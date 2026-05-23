// BRANDVERSE Influencer Marketing Agency Type Definitions

export interface PlatformDetail {
  name: "instagram" | "youtube" | "tiktok" | "twitter" | "linkedin";
  handle: string;
  followers: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  category: string;
  followers: string;
  engagementRate: string;
  location: string;
  platforms: PlatformDetail[];
  campaignSample?: string;
  featured?: boolean;
}

export interface CampaignMetric {
  label: string;
  value: string;
}

export interface Campaign {
  id: string;
  title: string;
  clientName: string;
  clientLogoPlaceholder: string; // Dynamic styled letters/logo
  category: "all" | "tech" | "beauty" | "lifestyle" | "gaming";
  description: string;
  accentColor: string; // Tailwind bg color class
  metrics: CampaignMetric[];
  heroImage: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  companyLogoLetters: string;
  avatar: string;
}

export interface CreatorCategory {
  id: string;
  name: string;
  tag: "tech" | "beauty" | "lifestyle" | "gaming";
  description: string;
  creatorCount: string;
  dominantPlatform: string;
  growthRate: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}
