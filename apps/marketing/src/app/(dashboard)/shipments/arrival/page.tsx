import { ShipmentsOverview } from "@/components/containers/ShipmentsOverview/ShipmentsOverview";
import { ArrivalShipmentsContainer } from "@/components/containers/ShipmentsOverview/ui/arrival/ArrivalShipmentsContainer";
import { Metadata } from "next";
import React from "react";
import { BaseFilters } from "@/components/containers/FiltersBar/presets/BaseFilters";

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
