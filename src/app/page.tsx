import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Featured Products
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Tools and templates crafted to help you stay organized, grow your
              business, and live intentionally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 text-teal-primary font-semibold border-2 border-teal-primary rounded-xl hover:bg-teal-primary hover:text-white transition-all"
            >
              View All Products
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
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl mb-4 block">🌊</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Juan Digital?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              We believe digital tools should be beautiful, functional, and
              accessible. Every product is designed with real workflows in mind —
              tested, refined, and ready to use in minutes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Whether you&apos;re managing ADHD, running a freelance business, or
              building better habits, we&apos;ve got a tool that fits your life.
            </p>
            <Link
              href="/about"
              className="text-teal-primary font-semibold hover:text-teal-dark transition-colors inline-flex items-center"
            >
              Read our story
              <svg
                className="ml-1 h-4 w-4"
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
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </>
  );
}
