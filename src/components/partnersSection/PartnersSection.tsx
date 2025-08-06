"use client";

import Image from "next/image";
import { PaginationControls } from "../PaginationControls";
import { PARTNERS } from "@/constants/partners";
import usePartnersController from "@/hooks/usePartnersController";

export function PartnersSection({ className }: { className?: string }) {
  const {
    currentPage,
    handleLeft,
    handleRight,
    partnerChunks,
    stateLeftArrow,
    stateRightArrow,
  } = usePartnersController(PARTNERS);

  return (
    <section aria-labelledby="partners-heading" className={className}>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Наши партнёрские{" "}
        <span className="text-[#4A6CF7] inline-flex items-center whitespace-nowrap">
          платформы
          <span className="ml-2 w-6 h-1 bg-[#4A6CF7] rounded"></span>
        </span>
      </h2>

      {/* MOBILE — слайдер */}
      <div className="lg:hidden overflow-hidden w-40 h-[320px] mx-auto mt-14 relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {partnerChunks.map((group, index) => (
            <ul
              key={index}
              className="flex flex-col gap-9 w-40 shrink-0"
              style={{ height: "320px" }}
            >
              {group.map((p) => (
                <li key={p.id} className="w-40 h-10">
                  <Image
                    alt={p.name}
                    src={p.img}
                    className="w-full h-full object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* DESKTOP — грид всех партнёров */}
      <ul className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-y-7 gap-x-10 mt-14 mx-auto w-max">
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

      <PaginationControls
        onClickLeft={handleLeft}
        onClickRight={handleRight}
        disableLeftArrow={stateLeftArrow}
        disableRightArrow={stateRightArrow}
        className="flex lg:hidden justify-center mt-9 gap-10"
      />
    </section>
  );
}
