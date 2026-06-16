// Pricing data
export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$500",
    priceLabel: "one-time",
    bestFor: "Freelancers, local businesses, personal brands",
    popular: false,
    features: [
      "Up to 5 pages",
      "SEO setup (meta, schema, sitemap)",
      "Mobile responsive",
      "Contact form",
      "Google Analytics integration",
      "1 round of revisions",
    ],
    addon: "+ $50/mo maintenance",
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$1,000",
    priceLabel: "one-time",
    bestFor: "Growing businesses, service providers",
    popular: true,
    features: [
      "Up to 10 pages",
      "Everything in Starter",
      "Blog setup",
      "Advanced on-page SEO",
      "Speed optimization",
      "3 rounds of revisions",
    ],
    addon: "+ $50/mo maintenance",
    cta: "Get Started",
  },
  {
    id: "custom",
    name: "Custom",
    price: "$1,500+",
    priceLabel: "starting at",
    bestFor: "E-commerce, complex platforms, full builds",
    popular: false,
    features: [
      "Unlimited pages",
      "E-commerce or custom features",
      "Full SEO strategy",
      "Performance audit",
      "Priority support",
      "Ongoing collaboration",
    ],
    addon: "+ $50/mo maintenance",
    cta: "Let's Talk",
  },
];

// FAQ data
export const faqs = [
  {
    id: "faq-1",
    question: "What makes your sites different from Squarespace or Wix?",
    answer:
      "Template builders like Squarespace and Wix produce bloated, generic code that Google's crawlers struggle with. Every site I build is written from scratch — clean, semantic HTML with structured data, optimized Core Web Vitals, and a PageSpeed score that actually moves the needle. You get a site that performs, not just one that looks good in a preview.",
  },
  {
    id: "faq-2",
    question: "How long does a website take?",
    answer:
      "Starter sites typically take 1–2 weeks from kickoff to launch. Professional packages run 3–4 weeks depending on content delivery. Custom builds vary by scope — we'll agree on a timeline during the discovery call before any work begins.",
  },
  {
    id: "faq-3",
    question: "Do I need the maintenance plan?",
    answer:
      "It's completely optional. The maintenance plan ($50/mo) covers monthly PageSpeed audits, CMS/plugin updates, uptime monitoring, and priority support. If you're comfortable managing the site yourself, you don't need it. Most clients add it so they never have to think about it.",
  },
  {
    id: "faq-4",
    question: "What do you need from me to get started?",
    answer:
      "To kick things off, I need: your logo (or we'll discuss options), the copy for each page (or I can write it for an additional fee), 2–3 reference sites you like the feel of, and a clear description of your goals and target audience. That's it — I handle the rest.",
  },
  {
    id: "faq-5",
    question: "Can you redesign my existing site?",
    answer:
      "Absolutely. Redesigns are priced similarly to new builds — the scope depends on how much content carries over and how complex the existing setup is. The best first step is a 30-minute call so I can assess what you have and what you actually need.",
  },
];

// Process steps
export const processSteps = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "We talk about your goals, audience, and what success looks like.",
  },
  {
    id: 2,
    title: "Design & Build",
    description:
      "I build your site with SEO baked in from day one — not bolted on after.",
  },
  {
    id: 3,
    title: "Review & Revise",
    description:
      "You give feedback. I refine. No guesswork, no surprises.",
  },
  {
    id: 4,
    title: "Launch & Rank",
    description:
      "We go live. I submit to Google and set up tracking so you can see the results.",
  },
];
