"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-3xl mb-4 block">📬</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Get notified about new products
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Join the list for early access, freebies, and exclusive discounts.
          No spam — just good stuff.
        </p>

        {submitted ? (
          <div className="bg-teal-primary/20 border border-teal-primary/30 text-teal-light rounded-xl px-6 py-4 max-w-md mx-auto">
            <p className="font-medium">🎉 You&apos;re in! Watch your inbox.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-teal-primary focus:ring-1 focus:ring-teal-primary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-teal-primary text-white font-semibold rounded-xl hover:bg-teal-dark transition-colors shadow-lg shadow-teal-primary/25 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
