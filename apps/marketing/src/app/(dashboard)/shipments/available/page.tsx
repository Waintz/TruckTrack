import { ShipmentsOverview } from "@/components/features/dashboard/ShipmentsOverview/ShipmentsOverview";
import { AvailableShipmentsContainer } from "@/components/features/dashboard/ShipmentsOverview/ui/Available/AvailableShipmentsContainer";
import { Metadata } from "next";
import { BaseFilters } from "@/components/features/dashboard/FiltersBar/presets/BaseFilters";

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
