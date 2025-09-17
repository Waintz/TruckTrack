import { ShipmentsOverview } from "@/components/containers/ShipmentsOverview/ShipmentsOverview";
import { ArrivalCards } from "@/components/containers/ShipmentsOverview/ui/arrival/ArrivalCards";
import { ArrivalTable } from "@/components/containers/ShipmentsOverview/ui/arrival/ArrivalTable";
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
      <ArrivalTable className="hidden xl:block" />
      <ArrivalCards className="block xl:hidden mt-5"/>
    </>
  );
}
