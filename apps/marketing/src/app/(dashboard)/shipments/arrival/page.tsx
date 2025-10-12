import { ShipmentsOverview } from "@/components/containers/ShipmentsOverview/ShipmentsOverview";
import { ArrivalShipmentsContainer } from "@/components/containers/ShipmentsOverview/ui/arrival/ArrivalShipmentsContainer";
import { TrackingFilters } from "@/components/containers/TrackingFilters/TrackingFilters";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Arrival",
};

export default function Page() {
  return (
    <>
      <TrackingFilters />
      <ShipmentsOverview />
      <ArrivalShipmentsContainer />
    </>
  );
}
