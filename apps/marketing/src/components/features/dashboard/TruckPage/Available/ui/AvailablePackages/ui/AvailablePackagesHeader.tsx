import { LayoutContainerHeaders } from "@/components/features/dashboard/TruckPage/layouts/LayoutContainerHeaders";
import { AvailablePackagesTableInformation } from "./packages/table/AvailablePackagesTableInformation";

export function AvailablePackagesHeader() {
  return (
    <LayoutContainerHeaders
      className="sm:justify-start"
      title="Available packages"
      renderMoreInformations={<AvailablePackagesTableInformation />}
    />
  );
}
