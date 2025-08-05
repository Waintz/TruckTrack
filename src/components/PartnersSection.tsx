import Image from "next/image";
import { PaginationControls } from "./PaginationControls";
import { PARTNERS } from "@/constants/partners";

export function PartnersSection({ className }: { className?: string }) {
  return (
    <section aria-labelledby="partners-heading" className={className}>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Наши партнёрские{" "}
        <span className="text-[#4A6CF7] inline-flex items-center whitespace-nowrap">
          платформы
          <span className="ml-2 w-6 h-1 bg-[#4A6CF7] rounded"></span>
        </span>
      </h2>

      <ul className="grid grid-cols-1 lg:grid-cols-4 gap-y-7 gap-x-10 mt-14 mx-auto w-max">
        {PARTNERS.map((p) => (
          <li key={p.id} className="w-40 h-10">
            <Image
              alt={p.name}
              src={p.img}
              className="w-full h-full object-contain"
            />
          </li>
        ))}
      </ul>

      <PaginationControls className="flex justify-center mt-9 gap-10 lg:hidden" />
    </section>
  );
}
