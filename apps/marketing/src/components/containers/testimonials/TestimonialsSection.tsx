"use client";

import { TESTIMONIALS } from "@/constants/texts";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import clsx from "clsx";
import { TestimonialsList } from "./ui/TestimonialsList";

export function TestimonialsSection({ className }: { className?: string }) {
  const setRef = useRegisterSection("testimonials");

  return (
    <section
      ref={setRef}
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
