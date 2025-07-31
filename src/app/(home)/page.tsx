"use client";

import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ServiceIntro } from "@/components/ServiceIntro";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="container mx-auto p-4 mt-10">
      <HeroSection />
      <PartnersSection className="mt-20" />
      <ServiceIntro />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection className="mt-20" />
    </main>
  );
}
