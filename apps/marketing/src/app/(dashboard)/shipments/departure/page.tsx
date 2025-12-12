import { ShipmentsOverview } from "@/components/features/dashboard/ShipmentsOverview/ShipmentsOverview";
import { DepartureShipmentsContainer } from "@/components/features/dashboard/ShipmentsOverview/ui/Departure/DepartureShipmentsContainer";
import { BaseFilters } from "@/components/features/dashboard/FiltersBar/presets/BaseFilters";

export default function Page() {
  return (
    <>
      <BaseFilters />
      <ShipmentsOverview />
      <DepartureShipmentsContainer />
    </>
  );
}
