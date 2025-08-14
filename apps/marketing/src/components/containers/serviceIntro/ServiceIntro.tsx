"use client";

import clsx from "clsx";
import Image from "next/image";
import { NAVIGATION_SECTION_CONFIG } from "@/constants/texts";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import { ServiceIntroHeader } from "./ui/ServiceIntroHeader";
import { ServiceIntroCards } from "./ui/ServiceIntroCards";

const nameSection = NAVIGATION_SECTION_CONFIG.about.nameSection;

export function ServiceIntro({ className }: { className?: string }) {
  const setRef = useRegisterSection(nameSection);

  return (
    <section
      id={nameSection}
      tabIndex={-1}
      ref={setRef}
      className={clsx(
        "mt-20 px-4 lg:flex lg:justify-around scroll-mt-header",
        className
      )}
    >
      <div>
        <ServiceIntroHeader />

        <ServiceIntroCards />
      </div>
      <section className="hidden lg:block">
        <Image
          width={480}
          height={480}
          src="/truck/DrivenByInsight.svg"
          alt="test"
        />
      </section>
    </section>
  );
}
