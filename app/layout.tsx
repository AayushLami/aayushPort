import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-[#0a0a0a] text-white antialiased font-sans">{children}</body>
    </html>
  );
}
