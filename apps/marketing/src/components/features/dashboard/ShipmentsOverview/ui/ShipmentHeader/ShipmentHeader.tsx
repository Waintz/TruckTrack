import clsx from "clsx";
import { ShipmentsCategoryTabs } from "./ShipmentCategoryTabs";
import { ShipmentsCategoryModal } from "./ShipmentsCategoryModal";

interface ShipmentsHeaderProps {
  className?: string;
}

export function ShipmentsHeader({ className }: ShipmentsHeaderProps) {
  return (
    <header
      className={clsx("flex flex-col sm:flex-row gap-5 sm:gap-15", className)}
    >
      <section className="flex items-center justify-between">
        <p className="font-bold text-3xl">Shipments</p>
        <ShipmentsCategoryModal className="block xsm:hidden" />
      </section>

      <ShipmentsCategoryTabs className="hidden xsm:flex" />
    </header>
  );
}
