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
    destination: "Valencia - Barcelona",
    departure: "2025-09-11T20:26:57.645Z",
    truckId: "B4:35324",
    arrive: "2025-09-11T20:26:57.645Z",
    hasTruckArrived: false,
  },
  {
    id: 2,
    destination: "Cordoba - Barcelona",
    departure: "2025-09-11T20:26:57.645Z",
    truckId: "B4:38987",
    arrive: "2025-09-11T14:05:57.645Z",
    hasTruckArrived: false,
  },
  {
    id: 3,
    departure: "2025-09-11T20:26:57.645Z",
    destination: "Seville - Barcelona",
    truckId: "B4:35322",
    arrive: "2025-09-11T13:05:57.645Z",
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
