"use client";

import { NAVIGATION_SHIPMENTS } from "@/config/pages.config";
import { ShipmentsCategoryTab } from "./ShipmentCategoryTab";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function ShipmentsCategoryTabs({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <section className={clsx(`flex gap-5`, className)}>
      {NAVIGATION_SHIPMENTS.map((item) => (
        <ShipmentsCategoryTab
          name={item.name}
          path={item.path}
          key={item.path}
          selected={pathname == item.path}
        />
      ))}
    </section>
  );
}
