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
  "Finance",
  "Business",
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
    stripePriceId: "price_XXXXX_adhd_planner",
    category: "Planners",
    tagline: "Focus-friendly weekly planning for ADHD brains",
    description:
      "The ultimate ADHD planning system — printable PDF + editable Canva template designed for neurodivergent brains. Includes priority slots, time blocks, habit tracker, distraction log, plus bonus sticker sheet and weekly review worksheets.",
    features: [
      "ADHD-friendly priority system",
      "Short-focus time blocks",
      "Weekly review + habit tracker",
      "Editable Canva template",
      "Print-ready PDF (Letter + A4)",
      "Sticker sheet included",
      "Distraction log worksheet",
      "Quick-start guide",
    ],
    emoji: "📋",
    color: "#6366F1",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "solopreneur-budget-tracker",
    name: "Solopreneur Budget Tracker",
    price: 49,
    etsyPrice: 57,
    stripePriceId: "price_XXXXX_budget_tracker",
    category: "Finance",
    tagline: "Smart automatic finances for solo business owners",
    description:
      "Professional auto-calculating Google Sheets template with everything you need to run your solo business finances. Track income, expenses, tax set-asides, and cash runway — plus invoice tracking, monthly P&L reports, and visual dashboard charts.",
    features: [
      "Auto-calculating formulas",
      "Tax set-aside calculator",
      "Cash runway tracker",
      "Invoice log",
      "Monthly P&L summary",
      "Visual charts & dashboard",
      "No scripts needed",
      "Video setup walkthrough",
    ],
    emoji: "💰",
    color: "#059669",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "freelancer-business-kit",
    name: "Freelancer Business Kit",
    price: 59,
    etsyPrice: 69,
    stripePriceId: "price_XXXXX_freelancer_kit",
    category: "Business",
    tagline: "Win, bill, and protect your freelance business",
    description:
      "Complete professional toolkit — editable Canva templates for proposals, invoices, contracts, and client onboarding. Look professional from first pitch to final payment, with email copy snippets and a brand customization guide included.",
    features: [
      "3 proposal layouts",
      "2 invoice templates",
      "Service contract template",
      "Client onboarding checklist",
      "Pricing table",
      "Email copy snippets",
      "Brand customization guide",
      "Welcome packet template",
    ],
    emoji: "💼",
    color: "#D97706",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "self-care-wellness-journal",
    name: "Self-Care & Wellness Journal Bundle",
    price: 35,
    etsyPrice: 41,
    stripePriceId: "price_XXXXX_wellness_journal",
    category: "Wellness",
    tagline: "Daily wellness tools for habits, mood, and gratitude",
    description:
      "Complete wellness journaling system — habit tracker, gratitude log, and mood tracker with guided prompts. Just 5-10 minutes daily for sustainable self-care, with calm minimalist design and both printable and editable formats.",
    features: [
      "30-day habit tracker",
      "Guided gratitude prompts",
      "Mood tracker with trends",
      "Weekly reflection pages",
      "Printable + Canva editable",
      "Calm minimalist design",
      "Morning & evening routines",
      "Self-care challenge cards",
    ],
    emoji: "🌿",
    color: "#EC4899",
    etsyUrl: "#",
    gumroadUrl: "#",
  },
  {
    slug: "minimalist-stoic-wall-art",
    name: "Minimalist Stoic Wall Art Set",
    price: 29,
    etsyPrice: 34,
    stripePriceId: "price_XXXXX_stoic_art",
    category: "Wall Art",
    tagline: "Timeless stoic quotes in clean minimalist prints",
    description:
      "Set of 6 high-resolution prints featuring stoic philosophy quotes in a stunning minimalist style. Perfect for gallery walls, home offices, and study spaces — includes multiple sizes and print-and-frame instructions.",
    features: [
      "6 high-res prints (300 DPI)",
      "Multiple sizes included",
      "Gallery wall ready",
      "Neutral color palette",
      "Print and frame instructions",
      "Commercial use friendly",
    ],
    emoji: "🖼️",
    color: "#64748B",
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
