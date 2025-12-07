import { ShipmentsOverview } from "@/components/containers/ShipmentsOverview/ShipmentsOverview";
import { DepartureShipmentsContainer } from "@/components/containers/ShipmentsOverview/ui/departure/DepartureShipmentsContainer";
import { BaseFilters } from "@/components/containers/FiltersBar/presets/BaseFilters";

export default function Page() {
  return (
    <>
      <BaseFilters />
      <ShipmentsOverview />
      <DepartureShipmentsContainer />
    </>
  );
}
