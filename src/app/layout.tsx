import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Juan Digital — Digital Tools to Simplify Your Life",
    template: "%s | Juan Digital",
  },
  description:
    "Premium digital templates, planners, and resources for creators and entrepreneurs. Beautifully crafted tools designed to simplify your life.",
  keywords: [
    "digital products",
    "templates",
    "planners",
    "printables",
    "Canva templates",
    "Google Sheets",
    "freelancer tools",
    "budget tracker",
    "wellness journal",
    "wall art prints",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Juan Digital",
    title: "Juan Digital — Digital Tools to Simplify Your Life",
    description:
      "Premium digital templates, planners, and resources for creators and entrepreneurs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Digital — Digital Tools to Simplify Your Life",
    description:
      "Premium digital templates, planners, and resources for creators and entrepreneurs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
