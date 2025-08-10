"use client";

import { PaginationControls } from "../../elements/buttons/PaginationControls";
import { PARTNERS } from "@/constants/partners";
import usePartnersController from "@/hooks/usePartnersController";
import { PartnersMobileSection } from "./ui/PartnersMobileSection";
import { PartnersDesktopSection } from "./ui/PartnersDesktopSection";
import { PartnersHeader } from "./ui/PartnersHeader";

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
      {/* HEADER - для всех устройств */}

      <PartnersHeader />

      {/* MOBILE — слайдер */}

      <PartnersMobileSection
        className="lg:hidden"
        currentPage={currentPage}
        partnersChunks={partnerChunks}
      />

      <PaginationControls
        onClickLeft={handleLeft}
        onClickRight={handleRight}
        disableLeftArrow={stateLeftArrow}
        disableRightArrow={stateRightArrow}
        className="flex lg:hidden justify-center mt-9 gap-10"
      />

      {/* DESKTOP — грид всех партнёров */}

      <PartnersDesktopSection PARTNERS={PARTNERS} />
    </section>
  );
}
