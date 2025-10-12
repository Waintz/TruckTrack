import clsx from "clsx";
import { AvailablePackagesContainer } from "./ui/AvailablePackages/AvailablePackagesContainer";
import { TruckLoadContainer } from "./ui/TruckLoad/TruckLoadContainer";
import { TruckPageHeader } from "./ui/TruckPageHeader";

export function TruckPage({ className }: { className?: string }) {
  return (
    <article className={clsx(className)}>
      <TruckPageHeader
        arrive={new Date().toISOString()}
        destination="Barcelona - Seville"
        shipmentNumber="S890324"
      />
      <section className="flex flex-col xl:flex-row gap-5 py-3 sm:p-2 items-stretch">
        <TruckLoadContainer className="w-1/2 h-full 2xl:sticky top-0" />
        <AvailablePackagesContainer className="w-1/2" />
      </section>
    </article>
  );
}
