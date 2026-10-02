import { Concept } from "@/components/Concept";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Outline } from "@/components/Outline";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Strengths } from "@/components/Strengths";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  priceRange: `¥${siteConfig.pricing.monthly}/月`,
  areaServed: "JP",
  offers: {
    "@type": "Offer",
    name: "定額ホームページ制作",
    price: String(siteConfig.pricing.monthly),
    priceCurrency: "JPY",
    description: "初期費用0円・月額定額のホームページ制作・運用サービス",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
        <Hero />
        <Concept />
        <Problems />
        <Services />
        <Strengths />
        <Pricing />
        <Process />
        <FAQ />
        <Outline />
        <Contact />
      </main>
    </>
  );
}
