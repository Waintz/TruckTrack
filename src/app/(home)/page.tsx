"use client";

import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ServiceIntro } from "@/components/ServiceIntro";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

// SocialIcons вынести Social в константу

export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4 mt-10">
        <HeroSection />
      </main>

      <section className="bg-gray-100/50 py-15 flex items-center mt-20">
        <div className="container mx-auto px-4">
          <PartnersSection className="" />
        </div>
      </section>

      <main className="container mx-auto p-4">
        <ServiceIntro />
      </main>

      <section className="bg-gray-100/50 py-15 flex items-center mt-20">
        <div className="container mx-auto px-4">
          <HowItWorksSection />
        </div>
      </section>

      <main className="container mx-auto p-4">
        <TeamSection className="mt-25" />
        <TestimonialsSection />
        <FAQSection className="max-w-6xl mx-auto px-4 mt-25" />
      </main>
    </>
  );
}
