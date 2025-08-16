export const dynamic = "force-static";

import { FAQSection } from "@/components/containers/faq/FAQSection";
import { HeroSection } from "@/components/containers/hero/HeroSection";
import { HowItWorksSection } from "@/components/containers/howItWork/HowItWorksSection";
import { PartnersSection } from "@/components/containers/partners/PartnersSection";
import { ServiceIntro } from "@/components/containers/serviceIntro/ServiceIntro";
import { TeamSection } from "@/components/containers/team/TeamSection";
import { TestimonialsSection } from "@/components/containers/testimonials/TestimonialsSection";

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
