"use client";

import { useRegisterSection } from "@/hooks/useRegisterSection";
import clsx from "clsx";
import { TestimonialsList } from "./ui/TestimonialsList";
import { NAVIGATION_SECTION_CONFIG, TESTIMONIALS } from "@/constants/texts";

const nameSection = NAVIGATION_SECTION_CONFIG.testimonials.nameSection;

export function TestimonialsSection({ className }: { className?: string }) {
  const setRef = useRegisterSection(nameSection);

  return (
    <section
      tabIndex={-1}
      ref={setRef}
      id={nameSection}
      className={clsx(
        "max-w-5xl mx-auto px-4 mt-20 scroll-mt-header",
        className
      )}
    >
      <h2 className="text-3xl font-extrabold text-center mb-12">
        Отзывы наших клиентов
      </h2>
      <TestimonialsList TESTIMONIALS={TESTIMONIALS} />
    </section>
  );
}
