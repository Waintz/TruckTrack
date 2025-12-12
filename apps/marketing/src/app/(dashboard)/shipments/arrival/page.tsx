import { ShipmentsOverview } from "@/components/features/dashboard/ShipmentsOverview/ShipmentsOverview";
import { ArrivalShipmentsContainer } from "@/components/features/dashboard/ShipmentsOverview/ui/Arrival/ArrivalShipmentsContainer";
import { Metadata } from "next";
import React from "react";
import { BaseFilters } from "@/components/features/dashboard/FiltersBar/presets/BaseFilters";

export const metadata: Metadata = {
  title: "Arrival",
};

export default function Page() {
  return (
    <>
      <BaseFilters />
      <ShipmentsOverview />
      <ArrivalShipmentsContainer />
    </>
  );
}
