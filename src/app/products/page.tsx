import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our collection of premium digital templates, planners, trackers, and printables. Tools designed to simplify your life.",
  openGraph: {
    title: "Products | Juan Digital",
    description:
      "Browse our collection of premium digital templates, planners, trackers, and printables.",
  },
};

export default function ProductsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            All Products
          </h1>
          <p className="text-slate-500 max-w-lg">
            Templates, planners, and digital tools — ready to download and
            start using today.
          </p>
        </div>

        <ProductGrid />
      </div>
    </section>
  );
}
