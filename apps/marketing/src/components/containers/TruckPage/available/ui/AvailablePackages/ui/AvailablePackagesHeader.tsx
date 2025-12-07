import { LayoutContainerHeaders } from "@/components/containers/TruckPage/layouts/LayoutContainerHeaders";
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
