import Image from "next/image";
import { PaginationControls } from "./PaginationControls";
import { PARTNERS } from "@/constants/partners";

export function PartnersSection({className}: {className?: string}) {
  return (
    <section aria-labelledby="partners-heading" className={className}>
        <h2 className="font-semibold text-center text-[20px]">
          Наши партнёрские платформы
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-y-7 gap-x-10 mt-8 mx-auto w-max ">
          {PARTNERS.map(p => {
            return (
              <li key={p.id} className="w-40 h-10">
                <Image alt={p.name} src={p.img} className="w-full h-full" />
              </li>
            )
          })}
        </ul>
        <PaginationControls className="flex justify-center mt-9 gap-10 lg:hidden" />
      </section>
  );
}
