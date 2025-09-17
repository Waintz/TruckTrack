import clsx from "clsx";
import { ArrivalCard } from "./ArrivalCard";

// массив с данными для 10 карточек
export const arrivals = [
  {
    id: 1,
    destination: "Oslo - Stockholm",
    truck: "NO7:77543",
    shipmentNumber: "NO778899",
    departure: "2025-09-09T07:20:00.000Z",
    arrive: "2025-09-09T12:10:00.000Z",
    weight: 980,
    hasTruckArrived: false,
  },
  {
    id: 2,
    destination: "Oslo - Stockholm",
    truck: "NO7:77543",
    shipmentNumber: "NO778899",
    departure: "2025-09-09T07:20:00.000Z",
    arrive: "2025-09-09T12:10:00.000Z",
    weight: 220,
    hasTruckArrived: true,
  },
  {
    id: 3,
    destination: "Oslo - Stockholm",
    truck: "NO7:77543",
    shipmentNumber: "NO778899",
    departure: "2025-09-09T07:20:00.000Z",
    arrive: "2025-09-09T12:10:00.000Z",
    weight: 110,
    hasTruckArrived: false,
  },
];

export function ArrivalCards({ className }: { className?: string }) {
  return (
    <article className={clsx('grid gap-2', className)}>
      {arrivals.map((arrival, index) => (
        <ArrivalCard key={index} arrivalCardsData={arrival} />
      ))}
    </article>
  );
}
