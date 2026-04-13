import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Juan Digital`,
      description: product.tagline,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-teal-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/products"
            className="hover:text-teal-primary transition-colors"
          >
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div
            className="rounded-2xl flex items-center justify-center aspect-square max-h-[500px]"
            style={{ backgroundColor: product.color + "15" }}
          >
            <span className="text-[120px] sm:text-[160px]">
              {product.emoji}
            </span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-teal-primary uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-slate-500 mb-4">{product.tagline}</p>

            <div className="text-4xl font-bold text-slate-900 mb-6">
              ${product.price}
              <span className="text-base font-normal text-slate-400 ml-2">
                USD
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Buy buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-primary text-white font-semibold rounded-xl hover:bg-teal-dark shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.559 3.074c0-.31.244-.374.62-.374h3.306c2.756 0 3.862 1.86 4.17 3.534l.124.682h.992L17.585 1h-.93l-.43 1.118s-1.86-.746-4.046-.746H6.332a1.87 1.87 0 0 0-1.86 1.86v16.536a1.87 1.87 0 0 0 1.86 1.86h6.468c2.186 0 4.046-.746 4.046-.746l.43 1.118h.93l.186-5.916h-.992l-.124.682c-.308 1.674-1.414 3.534-4.17 3.534H9.18c-.376 0-.62-.062-.62-.372V13.18h3.286c1.736 0 2.356 1.054 2.604 2.418l.124.744h.992V9.598h-.992l-.124.744c-.248 1.364-.868 2.418-2.604 2.418H8.56V3.074z" />
                </svg>
                Buy on Etsy
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-teal-primary hover:text-teal-primary transition-all"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z" />
                </svg>
                Buy on Gumroad
              </a>
            </div>

            {/* Features */}
            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-teal-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-slate-500 hover:text-teal-primary transition-colors"
          >
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to all products
          </Link>
        </div>
      </div>
    </section>
  );
}
