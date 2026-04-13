import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Juan Digital — an AI-powered digital products brand focused on creating quality tools that simplify your life.",
  openGraph: {
    title: "About | Juan Digital",
    description:
      "An AI-powered digital products brand focused on creating quality tools that simplify your life.",
  },
};

const values = [
  {
    emoji: "✨",
    title: "Quality First",
    description:
      "Every product is tested, refined, and polished before launch. We don't ship mediocre.",
  },
  {
    emoji: "🎯",
    title: "Function Over Flash",
    description:
      "Beautiful design that actually works. Every element serves a purpose in your workflow.",
  },
  {
    emoji: "♿",
    title: "Accessible by Default",
    description:
      "Clean layouts, readable fonts, and thoughtful design that works for everyone — including neurodivergent users.",
  },
  {
    emoji: "⚡",
    title: "Ready in Minutes",
    description:
      "Download, customize, and start using. No learning curve, no complicated setup.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Digital products built with{" "}
              <span className="text-teal-primary">intention</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Juan Digital is an AI-powered brand creating premium digital tools
              for real people with real problems. We combine smart automation
              with human-centered design to build products that actually make
              your day easier.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              How it started
            </h2>
            <div className="prose prose-slate prose-lg max-w-none space-y-4 text-slate-600 leading-relaxed">
              <p>
                We noticed something broken in the digital products space: too
                many templates that look great in previews but fall apart in
                practice. Planners that don&apos;t account for how people actually
                plan. Budget trackers that need a finance degree to set up.
                Business kits that feel generic and lifeless.
              </p>
              <p>
                Juan Digital was born to fix that. We start with the workflow —
                how do people actually use these tools in their daily lives? —
                and design backwards from there. Every template is tested with
                real users, every feature earns its place.
              </p>
              <p>
                We leverage AI to move fast, iterate constantly, and keep
                prices fair. But the design decisions? Those come from
                understanding real people — freelancers juggling invoices,
                entrepreneurs tracking cash flow, anyone trying to build better
                habits without the overwhelm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What we believe
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Four principles that guide every product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <span className="text-3xl mb-3 block">{value.emoji}</span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to simplify your life?
          </h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8">
            Browse our collection and find the perfect tool for your workflow.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-primary text-white font-semibold rounded-xl hover:bg-teal-dark shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30"
          >
            Browse Products
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
