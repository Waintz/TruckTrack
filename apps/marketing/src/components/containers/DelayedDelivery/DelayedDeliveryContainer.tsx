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
    truck: "B4:35324",
    arrive: "07:05 AM",
    delay: 5.05,
  },
  {
    id: 2,
    destination: "Cordoba - Barcelona",
    truck: "B4:38987",
    arrive: "10:05 AM",
    delay: 2.05,
  },
  {
    id: 3,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 4,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 5,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 6,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 7,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 8,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
];

export function DelayedDeliveryContainer({ className }: Props) {
  const [selectedRow, setSelectedRow] = useState<ITruckDelivery | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "card" | null>(null);

  return (
    <DelayedDeliveryView
      className={className}
      setSelectedRow={setSelectedRow}
      setViewMode={setViewMode}
      viewMode={viewMode}
      data={data}
    />
  );
}
