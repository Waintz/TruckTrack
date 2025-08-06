'use client';

import { TESTIMONIALS } from "@/constants/texts";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import clsx from "clsx";

export function TestimonialsSection({ className }: { className?: string }) {
    const setRef = useRegisterSection("testimonials");

  return (
    <section ref={setRef} className={clsx("max-w-5xl mx-auto px-4 mt-20 scroll-mt-header", className)}>
      <h2 className="text-3xl font-extrabold text-center mb-12">
        Отзывы наших клиентов
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {TESTIMONIALS.map(({ name, company, text }, idx) => (
          <article
            key={idx}
            className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white flex flex-col"
          >
            <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
              {text}
            </p>
            <footer className="mt-auto">
              <p className="font-semibold text-[#4A6CF7]">{name}</p>
              <p className="text-gray-500 text-sm">{company}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
