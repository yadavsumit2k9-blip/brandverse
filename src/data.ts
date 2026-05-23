import { Creator, Campaign, ServiceItem, TestimonialItem, CreatorCategory, ProcessStep } from "./types";

export const TRUSTED_BRANDS = [
  { name: "Aura Mason", type: "Fashion Brand", label: "AURA MASON" },
  { name: "Söl Cafe", type: "Café & Culture", label: "SÖL CAFE" },
  { name: "Lumi Skincare", type: "Clean Beauty", label: "LUMI SKINCARE" },
  { name: "Velocity Fitness", type: "Athletic Wear", label: "VELOCITY" },
  { name: "Dwell Labs", type: "Smart Home Tech", label: "DWELL LABS" },
  { name: "Nectar Juice Co.", type: "Wellness Products", label: "NECTAR" },
  { name: "Urban Grind", type: "Coffee Roasters", label: "URBAN GRIND" },
  { name: "Hale Apparel", type: "Sustainable Style", label: "HALE APPAREL" }
];

export const CREATORS: Creator[] = [
  {
    id: "cr_1",
    name: "Fashion & Style Creator",
    handle: "High Engagement Audience",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    category: "Fashion",
    followers: "245K Direct Sourced",
    engagementRate: "5.8% Rate",
    location: "Sourced: EU & US Markets",
    platforms: [
      { name: "instagram", handle: "@aesthetic_feed", followers: "245K" }
    ],
    campaignSample: "Fashion Campaign Showcase",
    featured: true
  },
  {
    id: "cr_2",
    name: "Lifestyle & Culture Creator",
    handle: "Creative Community Brand Focus",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    category: "Lifestyle",
    followers: "410K Sourced",
    engagementRate: "6.2% Rate",
    location: "Sourced: Vancouver & Seattle",
    platforms: [
      { name: "instagram", handle: "@lifestyle_stories", followers: "410K" }
    ],
    campaignSample: "Cafe Promotion Campaign",
    featured: true
  },
  {
    id: "cr_3",
    name: "Fitness & Wellness Expert",
    handle: "High Retention Listeners",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    category: "Fitness",
    followers: "680K Active",
    engagementRate: "7.4% Rate",
    location: "Sourced: Berlin & London",
    platforms: [
      { name: "instagram", handle: "@training_routines", followers: "680K" }
    ],
    campaignSample: "Fitness Product Promotion",
    featured: true
  },
  {
    id: "cr_4",
    name: "Skincare & Beauty Specialist",
    handle: "Buying Intent Focused Audience",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    category: "Skincare & Beauty",
    followers: "350K Sourced",
    engagementRate: "5.1% Rate",
    location: "Sourced: London & Paris",
    platforms: [
      { name: "instagram", handle: "@routine_breakdowns", followers: "350K" }
    ],
    campaignSample: "Skincare Brand Collaboration",
    featured: true
  },
  {
    id: "cr_5",
    name: "Silicon Valley Tech Advisor",
    handle: "Enterprise & Modern Tech Focus",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    category: "Tech",
    followers: "890K Quality",
    engagementRate: "4.8% Rate",
    location: "Sourced: SF Bay Area",
    platforms: [
      { name: "instagram", handle: "@tech_insights_feed", followers: "890K" }
    ],
    campaignSample: "Smart Home Tech Review",
    featured: false
  },
  {
    id: "cr_6",
    name: "Interactive Gaming Specialist",
    handle: "Live Interactive Stream Viewers",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
    category: "Gaming",
    followers: "1.2M Segmented",
    engagementRate: "8.1% Rate",
    location: "Sourced: Seoul & Tokyo Focus",
    platforms: [
      { name: "instagram", handle: "@lifestyle_updates", followers: "1.2M" }
    ],
    campaignSample: "Hardware Streaming Launch",
    featured: false
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: "camp_1",
    title: "Fashion Brand Campaign — Seasonal Integration",
    clientName: "Apparel Industry Sponsor",
    clientLogoPlaceholder: "AC",
    category: "beauty", // mapping to beauty/style
    description: "A target-driven fashion campaign celebrating sustainable knitwear. Hand-picked style creators curated daily-routine content showcasing cozy winter layerings to drive genuine multi-platform engagement.",
    accentColor: "bg-white border-slate-100",
    metrics: [
      { label: "Sourced ROI", value: "4.2x" },
      { label: "Est. Total Views", value: "1.8M" },
      { label: "Avg Engagement", value: "6.4%" }
    ],
    heroImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    deliverables: ["Product Try-on Content", "Seasonal Lookbook", "Exclusive Promo Codes"]
  },
  {
    id: "camp_2",
    title: "Skincare Campaign — Hydrating Glow Initiative",
    clientName: "Cosmetic Label Sponsor",
    clientLogoPlaceholder: "CD",
    category: "beauty",
    description: "Launch of specialized hydrating serums. 12 qualified lifestyle creators documented their unedited daily skin routines for 14 days to provide authentic product proof and building consumer trust.",
    accentColor: "bg-white border-slate-100",
    metrics: [
      { label: "Organic Impressions", value: "3.1M" },
      { label: "UGC Asset Pieces", value: "80+" },
      { label: "Audience Save Rate", value: "4.9%" }
    ],
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    deliverables: ["Daily Routine Video Series", "Before & After Assets", "Authentic Sourcing Q&As"]
  },
  {
    id: "camp_3",
    title: "Fitness Product Promotion — Athleisure Challenge",
    clientName: "Athletic Wear Sponsor",
    clientLogoPlaceholder: "FC",
    category: "lifestyle",
    description: "A lifestyle and workout push with certified fitness creators testing activewear sets. Built real community motivation with organic fitness routine vlogs and training schedules.",
    accentColor: "bg-white border-slate-100",
    metrics: [
      { label: "Combined Reach", value: "4.5M" },
      { label: "Aesthetic Saves", value: "24K+" },
      { label: "Avg Cost Per Click", value: "$0.14" }
    ],
    heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    deliverables: ["Workout Motivation Reels", "Wearability & Squat Tests", "Healthy Lifestyle Vlogs"]
  },
  {
    id: "camp_4",
    title: "Cafe Promotion Campaign — Specialty Roasters Launch",
    clientName: "Artisanal Coffee Sponsor",
    clientLogoPlaceholder: "AC",
    category: "lifestyle",
    description: "Introductory campaign for the launch of a specialty espresso bar and artisanal bakery. Coordinated localized food and design micro-influencers to share high-concept, atmospheric morning snapshots.",
    accentColor: "bg-white border-slate-100",
    metrics: [
      { label: "Est. Foot Traffic", value: "+140%" },
      { label: "Geotag CTR", value: "5.8%" },
      { label: "Organic Mentions", value: "200+" }
    ],
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    deliverables: ["Atmospheric Video Walkthroughs", "Aesthetic Flat-Lay Imagery", "Weekend Event Stories"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "serv_1",
    title: "Influencer Marketing",
    description: "Complete strategic planning combining precise data audit, creator mapping, contract negotiations, content verification, and localized boosting.",
    benefits: [
      "Creator shortlisting backed by audience audit",
      "True engagement quality checks",
      "Goal-oriented multi-platform schedules",
      "Brand safety protocols"
    ]
  },
  {
    id: "serv_2",
    title: "Brand Collaborations",
    description: "Orchestration of organic partnership alignments that build lasting community trust and merge content with long-term brand equity.",
    benefits: [
      "Custom co-branded strategy blueprints",
      "Exclusivity rights negotiation",
      "Long-term ambassador agreements",
      "Product collection integrations"
    ]
  },
  {
    id: "serv_3",
    title: "UGC Campaigns",
    description: "Cost-effective production of high-converting, authentic video and photo assets by qualified creators for use in your organic channels and paid advertising.",
    benefits: [
      "Optimized for high-impact Meta and TikTok ads",
      "Complete visual usage rights",
      "Scalable micro-creations under master briefs",
      "High CTR design strategies"
    ]
  },
  {
    id: "serv_4",
    title: "Creator Promotions",
    description: "Direct talent-backed promotion campaigns designed strictly to boost products, increase specific application sign-ups, or spark local event turnouts.",
    benefits: [
      "High-intent conversion pushes",
      "Custom promo-code and UTM attribution tracking",
      "Live stream and giveaway moderation",
      "Direct call-to-action content flow"
    ]
  },
  {
    id: "serv_5",
    title: "Social Media Campaigns",
    description: "Cross-platform integration bringing creators and official corporate social handle updates together for beautiful brand synergy.",
    benefits: [
      "Social takeover scheduling",
      "Story and feed content mapping",
      "Optimized copy matching creator tones",
      "Engagement and comment management"
    ]
  },
  {
    id: "serv_6",
    title: "Creator Management",
    description: "Handling of full legal contracts, usage licensing agreements, secure disbursements, and standard briefing checklists for worry-free talent management.",
    benefits: [
      "Ironcheck FTC regulatory review",
      "Global currency payments escrow",
      "Copyright and reuse agreements",
      "Automated notifications and timeline reminders"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test_1",
    quote: "Brandverse transformed our autumn launch campaign. They paired us with real lifestyle creators who actually loved our aesthetic, resulting in our most profitable quarters yet. Beautiful, flawless execution.",
    authorName: "Sarah Mason",
    authorRole: "Founder & Creative Director",
    companyName: "Aura Mason",
    companyLogoLetters: "AM",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test_2",
    quote: "For our cafe launch, we needed more than just numbers—we needed local organic foot traffic. Brandverse curated localized coffee and design-lovers who drove over 1,200 store visits in the opening week itself.",
    authorName: "Mateo Söl",
    authorRole: "F&B Operations Director",
    companyName: "Söl Cafe Group",
    companyLogoLetters: "SC",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test_3",
    quote: "The UGC content assets delivered by their creator network transformed our advertising performance. Our Meta Ads click-through rate shot up by nearly 48% within hours of deploying the assets.",
    authorName: "Lisa Chen",
    authorRole: "Head of Growth Marketing",
    companyName: "Lumi Skincare",
    companyLogoLetters: "LS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "1",
    title: "Brand Consultation",
    description: "We align deeply on your exact budget requirements, campaign timeline goals, aesthetic style, target audience demographics, and core product key value prepositions.",
    deliverable: "Custom Strategy Pitch deck with clear deliverables."
  },
  {
    step: "2",
    title: "Creator Match",
    description: "We scour our private network to find and audit vetted creators whose audiences align perfectly with your buyers, providing verified stats and engagement rates.",
    deliverable: "Hand-curated creator roster ready for campaign invitation."
  },
  {
    step: "3",
    title: "Campaign Execution",
    description: "We lock in negotiations, legal licensing, FTC compliance, and assets checking. Content goes live smoothly to generate conversions, followed by full ROI analytics reporting.",
    deliverable: "Campaign goes live, monitored, with live analytical reports."
  }
];
