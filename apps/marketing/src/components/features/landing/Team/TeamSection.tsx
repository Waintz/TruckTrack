"use client";

import { TEAM } from "@/constants/team";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import clsx from "clsx";
import { TeamList } from "./ui/TeamList";
import { NAVIGATION_SECTION_CONFIG } from "@/constants/texts";

const nameSection = NAVIGATION_SECTION_CONFIG.team.nameSection;

export function TeamSection({ className }: { className?: string }) {
  const setRef = useRegisterSection(nameSection);

  return (
    <section
      ref={setRef}
      id={nameSection}
      tabIndex={-1}
      className={clsx("px-4 max-w-6xl mx-auto scroll-mt-header", className)}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Наша команда
      </h2>
      <TeamList team={TEAM} />
    </section>
  );
}
