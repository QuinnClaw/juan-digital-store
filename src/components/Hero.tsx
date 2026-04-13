import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-white">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D9488 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-block bg-teal-primary/10 text-teal-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ✨ Premium Digital Products
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Digital tools designed to{" "}
            <span className="text-teal-primary">simplify your life</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
            Beautifully crafted templates, planners, and resources for creators,
            entrepreneurs, and anyone who wants to get more done with less
            friction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
