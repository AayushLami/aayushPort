import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Rankly — SEO-Optimized Websites | Aayush Lamichhane',
  description: 'Custom-built, fast, SEO-optimized websites starting at $500. Built by Aayush Lamichhane. Serving businesses nationwide from New Jersey.',
  keywords: 'SEO website builder, custom websites, affordable web design, SEO optimized websites, small business websites, New Jersey web developer',
  authors: [{ name: 'Aayush Lamichhane' }],
  creator: 'Aayush Lamichhane',
  openGraph: {
    title: 'Rankly — Websites that get found.',
    description: 'Custom-built SEO websites starting at $500. No templates. No fluff.',
    url: 'https://rankly.dev',
    siteName: 'Rankly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rankly — Websites that get found.',
    description: 'Custom-built SEO websites starting at $500.',
    creator: '@aayushlamichhane',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://rankly.dev' },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rankly",
  "description": "Custom-built SEO-optimized websites for businesses nationwide",
  "founder": "Aayush Lamichhane",
  "url": "https://rankly.dev",
  "email": "alamichhane93@gmail.com",
  "telephone": "908-338-6832",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New Jersey",
    "addressCountry": "US"
  },
  "priceRange": "$500 - $1500+"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111111] antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

