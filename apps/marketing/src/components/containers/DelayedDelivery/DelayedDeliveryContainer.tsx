"use client";

import { ITruckDelivery } from "@/types/truck";
import { useState } from "react";
import { DelayedDeliveryView } from "./DelayedDeliveryView";

interface Props {
  className?: string;
}

const data: ITruckDelivery[] = [
  {
    id: 1,
    arriveLocation: "Barcelona",
    departureLocation: "Valencia",
    departureDate: "2025-09-11T20:26:57.645Z",
    truckId: "B4:35324",
    arriveDate: "2025-09-11T20:26:57.645Z",
    hasTruckArrived: false,
  },
  {
    id: 2,
    arriveLocation: "Barcelona",
    departureLocation: "Cordoba",
    departureDate: "2025-09-11T20:26:57.645Z",
    truckId: "B4:38987",
    arriveDate: "2025-09-11T14:05:57.645Z",
    hasTruckArrived: false,
  },
  {
    id: 3,
    arriveLocation: "Barcelona",
    departureLocation: "Seville",
    departureDate: "2025-09-11T20:26:57.645Z",
    truckId: "B4:35322",
    arriveDate: "2025-09-11T13:05:57.645Z",
    hasTruckArrived: false,
  },
];

export function DelayedDeliveryContainer({ className }: Props) {
  const [selectedRow, setSelectedRow] = useState<ITruckDelivery | null>(null);

  return (
    <DelayedDeliveryView
      className={className}
      selectedRow={selectedRow}
      setSelectedRow={setSelectedRow}
      data={data}
    />
  );
}
