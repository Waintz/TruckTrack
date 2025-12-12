"use client";

import clsx from "clsx";
import { DepartureTruckHeader } from "./ui/DepartureTruckHeader";
import { TechnicalInformationView } from "./ui/TechnicalInformation/TechnicalInformationView";
import { AssignedDriverView } from "./ui/AssignedDriver/AssignedDriverView";

export function TruckDeparturePage({ className }: { className?: string }) {
  return (
    <article className={clsx(className)}>
      <DepartureTruckHeader />
      <section className="flex flex-col xl:flex-row gap-5 py-3 sm:p-2 items-stretch">
        <TechnicalInformationView 
          className="w-1/2"
        />
        <AssignedDriverView 
          className="w-1/2"
        />
      </section>
    </article>
  );
}
