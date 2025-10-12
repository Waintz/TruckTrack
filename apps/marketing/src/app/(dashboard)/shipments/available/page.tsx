import { ShipmentsOverview } from "@/components/containers/ShipmentsOverview/ShipmentsOverview";
import { AvailableShipmentsContainer } from "@/components/containers/ShipmentsOverview/ui/available/AvailableShipmentsContainer";
import { TrackingFilters } from "@/components/containers/TrackingFilters/TrackingFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available",
};

export default function Page() {
  return (
    <>
      <TrackingFilters />
      <ShipmentsOverview />
      <AvailableShipmentsContainer />
    </>
  );
}
