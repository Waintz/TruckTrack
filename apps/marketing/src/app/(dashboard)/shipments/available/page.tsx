import { ShipmentsOverview } from "@/components/containers/ShipmentsOverview/ShipmentsOverview";
import { AvailableShipmentsContainer } from "@/components/containers/ShipmentsOverview/ui/available/AvailableShipmentsContainer";
import { Metadata } from "next";
import { BaseFilters } from "@/components/containers/FiltersBar/presets/BaseFilters";

export const metadata: Metadata = {
  title: "Available",
};

export default function Page() {
  return (
    <>
      <BaseFilters />
      <ShipmentsOverview />
      <AvailableShipmentsContainer />
    </>
  );
}
