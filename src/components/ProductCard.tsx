import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-primary/30 transition-all duration-300 h-full flex flex-col">
        {/* Image placeholder */}
        <div
          className="relative h-48 flex items-center justify-center"
          style={{ backgroundColor: product.color + "15" }}
        >
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {product.emoji}
          </span>
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            ${product.price}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-medium text-teal-primary uppercase tracking-wider mb-1">
            {product.category}
          </span>
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-teal-primary transition-colors mb-2 leading-snug">
            {product.name}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed flex-1">
            {product.tagline}
          </p>
          <div className="mt-4 flex items-center text-teal-primary text-sm font-medium">
            View details
            <svg
              className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </article>
    </Link>
  );
}
