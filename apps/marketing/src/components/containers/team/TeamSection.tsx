"use client";

import { TEAM } from "@/constants/team";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import clsx from "clsx";
import { TeamList } from "./ui/TeamList";

export function TeamSection({ className }: { className?: string }) {
  const setRef = useRegisterSection("team");

  return (
    <section
      ref={setRef}
      className={clsx("px-4 max-w-6xl mx-auto scroll-mt-header", className)}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Наша команда
      </h2>
      <TeamList team={TEAM} />
    </section>
  );
}
