"use client";

import clsx from "clsx";
import Image from "next/image";
import { ApprovalCard } from "../../ui/cards/ApprovalCard";
import { SERVICE_TAGLINE } from "@/constants/texts";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import { ServiceIntroHeader } from "./ui/ServiceIntroHeader";
import { ServiceIntroCards } from "./ui/ServiceIntroCards";

export function ServiceIntro({ className }: { className?: string }) {
  const setRef = useRegisterSection("about");

  return (
    <section
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
