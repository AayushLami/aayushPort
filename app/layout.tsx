import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rankly — SEO-Optimized Websites by Aayush Lamichhane",
  description:
    "Custom-built, fast, SEO-optimized websites for small businesses. Starting at $500. Get found on Google.",
  openGraph: {
    title: "Rankly — Websites that get found.",
    description: "SEO-optimized websites starting at $500.",
    url: "https://rankly.dev",
    type: "website",
    siteName: "Rankly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rankly — Websites that get found.",
    description: "SEO-optimized websites starting at $500.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111111] antialiased font-sans">{children}</body>
    </html>
  );
}
