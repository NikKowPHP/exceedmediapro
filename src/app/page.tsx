// import { Suspense } from "react";
import {
  HeroSection,
  SubHeroSection,
  ServicesSection,
  HowItWorksSection,
  WhyUsSection,
  Pricing,
  TestimonialsSection,
  ContactSection,
  FaqSection,
} from "@/helpers/componentsLoad";
import { companyConfig } from "@/config/company";

export default async function HomePage() {
  return (
    <>
      <div
        className="relative overflow-hidden min-h-screen bg-primary"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Priority Content for LCP */}
        <HeroSection />
        <SubHeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyUsSection />
        <Pricing />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
    

        {/* Metadata */}
        <meta itemProp="name" content={companyConfig.name} />
        <meta itemProp="description" content={companyConfig.description} />
        <meta itemProp="image" content="/images/ziro.avif" />
        <meta
          itemProp="dateModified"
          content={new Date().toISOString().split("T")[0]}
        />
      </div>
    </>
  );
}
