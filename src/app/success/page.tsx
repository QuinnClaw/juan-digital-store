import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You for Your Purchase!",
  description: "Your order was successful. Here's how to access your downloads.",
};

export default function SuccessPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-teal-primary/10">
          <svg
            className="h-10 w-10 text-teal-primary"
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
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Thank You for Your Purchase! 🎉
        </h1>

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Your order was successful and your payment has been confirmed.
        </p>

        {/* Download Instructions */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-left mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            📥 How to Access Your Download
          </h2>
          <ol className="space-y-4 text-slate-600">
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-teal-primary/10 text-teal-primary text-sm font-bold">
                1
              </span>
              <span>
                <strong className="text-slate-800">Check your email</strong> —
                you&apos;ll receive a confirmation email with your download link
                within a few minutes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-teal-primary/10 text-teal-primary text-sm font-bold">
                2
              </span>
              <span>
                <strong className="text-slate-800">
                  Click the download link
                </strong>{" "}
                — your files will be available as a ZIP or direct download.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-teal-primary/10 text-teal-primary text-sm font-bold">
                3
              </span>
              <span>
                <strong className="text-slate-800">Check your spam folder</strong>{" "}
                — if you don&apos;t see the email within 10 minutes, check spam
                or promotions.
              </span>
            </li>
          </ol>
        </div>

        {/* Support Note */}
        <p className="text-sm text-slate-500 mb-8">
          Having trouble? Contact us at{" "}
          <a
            href="mailto:support@juandigital.com"
            className="text-teal-primary hover:underline"
          >
            support@juandigital.com
          </a>{" "}
          and we&apos;ll get you sorted right away.
        </p>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-primary text-white font-semibold rounded-xl hover:bg-teal-dark shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl"
          >
            Browse More Products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-teal-primary hover:text-teal-primary transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
