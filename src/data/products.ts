export interface Product {
  slug: string;
  name: string;
  price: number;
  etsyPrice: number;
  stripePriceId: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  emoji: string;
  color: string;
  etsyUrl?: string;
  gumroadUrl?: string;
}

export const categories = [
  "All",
  "Planners",
  "Business",
  "Finance",
  "Wellness",
  "Wall Art",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    slug: "adhd-weekly-planner",
    name: "ADHD Weekly Planner Bundle",
    price: 39,
    etsyPrice: 45,
    stripePriceId: "price_1TLr8ZCgXsp4lYCNCMP4oUVA",
    category: "Planners",
    tagline: "A planner that works with your ADHD brain — not against it",
    description:
      "Designed specifically for how ADHD brains work. Research-backed sections that reduce overwhelm, externalize your thoughts, and make it easier to actually start things. Includes brain dump zone, flexible time blocks, habit tracker, distraction log, and weekly review.",
    features: [
      "Top 3 priorities (not 20)",
      "Brain dump zone",
      "Flexible 15-45 min time blocks",
      "5-habit weekly tracker",
      "Distraction log",
      "Weekly review + wins section",
      "Print-ready PDF (Letter + A4)",
      "Research-backed ADHD design",
    ],
    emoji: "🧠",
    color: "#7B68AE",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "solopreneur-budget-tracker",
    name: "Solopreneur Budget & Finance Tracker",
    price: 49,
    etsyPrice: 57,
    stripePriceId: "price_1TLr8BCgXsp4lYCN6a6vFkQg",
    category: "Finance",
    tagline: "Finally know where your money goes — without hiring an accountant",
    description:
      "Auto-calculating Google Sheets template built for freelancers and solopreneurs. 6 tabs: Dashboard, Income Tracker, Expense Tracker, Monthly P&L, Tax Estimator, and Categories. Set up in 5 minutes, no accounting degree needed.",
    features: [
      "Auto-calculating formulas",
      "Built-in tax estimation (25% default)",
      "20+ pre-loaded categories",
      "Monthly + annual views",
      "Goal tracking with progress",
      "6-tab Google Sheets template",
      "Works in Google Sheets (free)",
      "Quick-Start Guide included",
    ],
    emoji: "💰",
    color: "#059669",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "freelancer-business-kit",
    name: "Freelancer Business Template Kit",
    price: 59,
    etsyPrice: 68,
    stripePriceId: "price_1TLr8ECgXsp4lYCNmvP7lDLx",
    category: "Business",
    tagline: "Land clients. Get paid. Look professional — from day one",
    description:
      "3-template bundle: professional invoice, client proposal with 3-tier pricing, and simple service contract. Fill-in-the-blank format — customize in 10 minutes. Works with Google Docs or any word processor.",
    features: [
      "Professional invoice template",
      "3-tier pricing proposal",
      "11-clause service contract",
      "Editable .docx format",
      "PDF versions included",
      "Works with Google Docs (free)",
      "Quick-Start Guide",
      "Plain language (not legalese)",
    ],
    emoji: "💼",
    color: "#D97706",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "self-care-journal-bundle",
    name: "Self-Care Journal Bundle",
    price: 35,
    etsyPrice: 40,
    stripePriceId: "price_1TLr8HCgXsp4lYCNwZiNeO2e",
    category: "Wellness",
    tagline: "Three journals. One bundle. A whole month of showing up for yourself",
    description:
      "30 days of guided journaling, habit tracking, and mood awareness. Includes 30 unique gratitude prompts, 5-habit daily tracker, and monthly mood grid with emotion color key. Just 5-10 minutes per day.",
    features: [
      "30 unique gratitude prompts",
      "30-day habit tracker (5 habits)",
      "Monthly mood tracker with emotion key",
      "Weekly reflection sections",
      "Printable PDF (Letter + A4)",
      "Undated — start anytime",
      "Clean minimal design",
      "Print as many as you need",
    ],
    emoji: "🌿",
    color: "#C48B9F",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "minimalist-stoic-wall-art",
    name: "Stoic Quotes Wall Art Set of 18",
    price: 29,
    etsyPrice: 34,
    stripePriceId: "price_1TLr8KCgXsp4lYCNmvc4llzY",
    category: "Wall Art",
    tagline: "Six timeless quotes. Clean design. Wisdom on your walls",
    description:
      "6 minimalist stoic philosophy prints — Marcus Aurelius, Seneca, and Epictetus. Clean serif typography, generous white space. Includes 3 sizes (8x10, 11x14, A4) in 2 color options (black/white + charcoal/cream). 36 files total.",
    features: [
      "6 curated stoic quotes",
      "3 sizes (8x10, 11x14, A4)",
      "2 color options per quote",
      "36 print-ready PDF files",
      "300 DPI high resolution",
      "Gallery wall ready",
      "Printing & framing guide",
      "All public domain quotes",
    ],
    emoji: "🖼️",
    color: "#64748B",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "meal-planner-bundle",
    name: "Meal Planner & Grocery List Bundle",
    price: 8,
    etsyPrice: 8,
    stripePriceId: "price_XXXXX_meal_planner",
    category: "Planners",
    tagline: "Plan meals on Sunday. Shop once. Eat stress-free all week",
    description:
      "3-page printable bundle: weekly meal planner with 4 meal slots per day, grocery list organized by store section, and meal prep planner with pre-filled task checklist. Includes water tracker and budget fields.",
    features: [
      "7-day meal planner (4 meals/day)",
      "Grocery list by store section",
      "Meal prep planner with checklist",
      "Built-in water tracker",
      "Budget tracking fields",
      "Printable PDF (Letter + A4)",
      "Undated — reprint weekly",
      "Pre-filled prep tasks",
    ],
    emoji: "🍽️",
    color: "#6B8E5A",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "wedding-planning-checklist",
    name: "Wedding Planning Checklist Bundle",
    price: 12,
    etsyPrice: 12,
    stripePriceId: "price_XXXXX_wedding_checklist",
    category: "Planners",
    tagline: "Plan your dream wedding without losing your mind",
    description:
      "150+ tasks organized by 12-month timeline from engagement to honeymoon. Includes printable master checklist, wedding budget tracker (Google Sheets), vendor contact sheet, and hour-by-hour day-of timeline template.",
    features: [
      "150+ tasks, 12-month timeline",
      "Wedding budget tracker (Sheets)",
      "Vendor contact sheet",
      "Day-of timeline template",
      "Printable PDF (Letter + A4)",
      "Title page with couple details",
      "Post-wedding task section",
      "Budget vs. actual tracking",
    ],
    emoji: "💍",
    color: "#D4A5A5",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "monthly-goal-planner",
    name: "Monthly Goal Planner",
    price: 7,
    etsyPrice: 7,
    stripePriceId: "price_XXXXX_goal_planner",
    category: "Planners",
    tagline: "Set 3 goals. Break them down. Actually achieve them",
    description:
      "Simple 3-page monthly system: set 3 focused goals, break them into weekly actions, and review what worked. No overwhelm, no 47-item to-do list. Just clarity and follow-through.",
    features: [
      "3 focused goals per month",
      "Weekly action breakdown",
      "Monthly review template",
      "Goal status tracking",
      "Wins & gratitude section",
      "Printable PDF (Letter + A4)",
      "Undated — start any month",
      "Motivational micro-prompts",
    ],
    emoji: "🎯",
    color: "#5B7F6E",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "social-media-templates",
    name: "Social Media Template Pack",
    price: 15,
    etsyPrice: 15,
    stripePriceId: "price_XXXXX_social_media",
    category: "Business",
    tagline: "30 days of content. Done for you. Just customize and post",
    description:
      "30 Instagram post templates designed for wellness coaches, therapists, and health professionals. Includes 30-day content calendar with caption prompts and hashtag guide with 10 curated sets. Editable in Canva (free version works).",
    features: [
      "30 Instagram post templates",
      "10 educational + 10 engagement + 10 promo",
      "30-day content calendar",
      "Hashtag guide (10 niche sets)",
      "Editable in Canva Free",
      "Wellness-focused color palette",
      "Square + portrait formats",
      "Caption prompts included",
    ],
    emoji: "📱",
    color: "#8B5CF6",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}
