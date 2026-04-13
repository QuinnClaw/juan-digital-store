"use client";

import { useState } from "react";
import { products, categories, type Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  initialCategory = "All",
}: {
  initialCategory?: Category;
}) {
  const [active, setActive] = useState<Category>(initialCategory);

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "bg-teal-primary text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-400 py-12">
          No products in this category yet.
        </p>
      )}
    </div>
  );
}
