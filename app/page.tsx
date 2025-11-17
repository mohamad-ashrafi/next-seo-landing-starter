import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import SeoJsonLd from "@/components/SeoJsonLd";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
  };

  return (
    <>
      <SeoJsonLd data={structuredData} />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
