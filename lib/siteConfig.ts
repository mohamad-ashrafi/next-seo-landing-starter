export const siteConfig = {
  name: "Next SEO Landing Starter",
  shortName: "SEO Landing",
  description:
    "Minimal, SEO-focused landing page starter built with Next.js and Tailwind CSS.",
  url: "https://next-seo-landing-starter.vercel.app", 
  logo: "/favicon.ico",
  ogImage: "/og-image.png", 
  twitterHandle: "@your_twitter",
  author: "Mohamad Ashrafi"
} as const;

export type SiteConfig = typeof siteConfig;
