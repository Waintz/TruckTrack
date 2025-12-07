import clsx from "clsx";
import { ArrivalCard } from "./ArrivalCard";
import { ITruckShipmentsAdditionalInformation } from "@/types/truck";

// массив с данными для 10 карточек
export const arrivals: ITruckShipmentsAdditionalInformation[] = [
  {
    id: 1,
    arriveLocation: "Stockholm",
    departureLocation: "Oslo",
    truckId: "NO7:77543",
    shipmentNumber: "NO778899",
    departureDate: "2025-09-09T07:20:00.000Z",
    arriveDate: "2025-09-09T12:10:00.000Z",
    usedWeight: 110,
    totalWeight: 200,
    hasTruckArrived: false,
  },
  {
    id: 2,
    arriveLocation: "Stockholm",
    departureLocation: "Oslo",
    truckId: "NO7:77543",
    shipmentNumber: "NO778899",
    departureDate: "2025-09-09T07:20:00.000Z",
    arriveDate: "2025-09-09T12:10:00.000Z",
    usedWeight: 110,
    totalWeight: 200,
    hasTruckArrived: false,
  },
  {
    id: 3,
    arriveLocation: "Stockholm",
    departureLocation: "Oslo",
    truckId: "NO7:77543",
    shipmentNumber: "NO778899",
    departureDate: "2025-09-09T07:20:00.000Z",
    arriveDate: "2025-09-09T12:10:00.000Z",
    usedWeight: 110,
    totalWeight: 200,
    hasTruckArrived: false,
  },
];

export function ArrivalCards({ className }: { className?: string }) {
  return (
    <article className={clsx("grid gap-2", className)}>
      {arrivals.map((arrival, index) => (
        <ArrivalCard key={index} arrivalCardsData={arrival} />
      ))}
    </article>
  );
}
