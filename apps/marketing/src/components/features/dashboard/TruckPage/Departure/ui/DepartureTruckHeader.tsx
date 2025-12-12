import { TruckPageHeader } from "../../shared/TruckPageHeader";

export function DepartureTruckHeader() {
  return (
    <TruckPageHeader
      timeAction={new Date().toISOString()}
      title="Barcelona - Seville"
      shipmentNumber="S890324"
    />
  );
}
