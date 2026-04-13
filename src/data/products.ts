export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  emoji: string;
  color: string;
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
    price: 12,
    category: "Planners",
    tagline: "Focus-friendly weekly planning for ADHD brains",
    description:
      "Printable PDF + editable Canva template designed for neurodivergent brains. Priority slots, time blocks, habit tracker, distraction log.",
    features: [
      "ADHD-friendly priority system",
      "Short-focus time blocks",
      "Weekly review + habit tracker",
      "Editable Canva template",
      "Print-ready PDF (Letter + A4)",
      "Sticker sheet included",
    ],
    emoji: "📋",
    color: "#6366F1",
  },
  {
    slug: "solopreneur-budget-tracker",
    name: "Solopreneur Budget Tracker",
    price: 15,
    category: "Finance",
    tagline: "Smart automatic finances for solo business owners",
    description:
      "Auto-calculating Google Sheets template. Track income, expenses, tax set-asides, and cash runway in one dashboard.",
    features: [
      "Auto-calculating formulas",
      "Tax set-aside calculator",
      "Cash runway tracker",
      "Invoice log",
      "Monthly P&L summary",
      "Visual charts",
      "No scripts needed",
    ],
    emoji: "💰",
    color: "#059669",
  },
  {
    slug: "freelancer-business-kit",
    name: "Freelancer Business Kit",
    price: 18,
    category: "Business",
    tagline: "Win, bill, and protect your freelance business",
    description:
      "Editable Canva templates for proposals, invoices, and contracts. Look professional from first pitch to final payment.",
    features: [
      "3 proposal layouts",
      "2 invoice templates",
      "Service contract template",
      "Pricing table",
      "Email copy snippets",
      "Brand customization guide",
    ],
    emoji: "💼",
    color: "#D97706",
  },
  {
    slug: "self-care-wellness-journal",
    name: "Self-Care & Wellness Journal Bundle",
    price: 10,
    category: "Wellness",
    tagline: "Daily wellness tools for habits, mood, and gratitude",
    description:
      "Habit tracker, gratitude log, and mood tracker with guided prompts. 5-10 minutes daily for sustainable self-care.",
    features: [
      "30-day habit tracker",
      "Guided gratitude prompts",
      "Mood tracker with trends",
      "Weekly reflection pages",
      "Printable + Canva editable",
      "Calm minimalist design",
    ],
    emoji: "🌿",
    color: "#EC4899",
  },
  {
    slug: "minimalist-stoic-wall-art",
    name: "Minimalist Stoic Wall Art Set",
    price: 9,
    category: "Wall Art",
    tagline: "Timeless stoic quotes in clean minimalist prints",
    description:
      "Set of 6 high-resolution prints featuring stoic philosophy quotes. Perfect for gallery walls, home offices, and study spaces.",
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
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}
