import { ShipmentsInformation } from "../Available/AvailableShipmentsView";
import { DepartureShipmentsCards } from "./DepartureShipmentsCards";


export function DepartureShipmentsView() {
  return (
    <>
      <DepartureShipmentsCards
        className="mt-7 grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
        shipments={ShipmentsInformation}
      />
    </>
  );
}
