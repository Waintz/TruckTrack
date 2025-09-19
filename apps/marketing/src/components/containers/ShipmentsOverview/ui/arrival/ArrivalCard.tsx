"use client";

import { ExpandButton } from "@/components/containers/accordion/ExpandButton";
import { DelayBadge } from "@/components/elements/DelayBadge";
import { Surface } from "@/components/shared/Surface";
import { COLORS } from "@/config/colors.config";
import { calculateDelay } from "@/utils/calculateDelay";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { formatMinutesToHHMM } from "@/utils/formatMinutesToHHMM";
import { getTruckStatus } from "@/utils/getTruckStatus";
import { useState } from "react";
import { ArrivalInfoRow } from "./ArrivalInfoRow";

export function ArrivalCard({
  arrivalCardsData,
}: {
  arrivalCardsData: {
    id: number;
    destination: string;
    truck: string;
    shipmentNumber: string;
    departure: string;
    arrive: string;
    weight: number;
    hasTruckArrived: boolean;
  };
}) {
  const delay = calculateDelay(arrivalCardsData.departure);

  const formattedDepartureDate = formatIsoToDateTime({
    time: arrivalCardsData.departure,
    options: { month: true, day: true, hours: true, minutes: true },
  });

  const formattedArrivalDate = formatIsoToDateTime({
    time: arrivalCardsData.arrive,
    options: { month: true, day: true, hours: true, minutes: true },
  });

  const truckStatus = getTruckStatus(
    arrivalCardsData.departure,
    arrivalCardsData.arrive,
    arrivalCardsData.hasTruckArrived
  );

  const formattedDelay =
    delay !== null ? formatMinutesToHHMM({ time: delay.delayMinutes }) : "-";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const rows = [
    { label: "Destination:", value: arrivalCardsData.destination },
    {
      label: "Shipment number:",
      value: arrivalCardsData.shipmentNumber,
    },
    { label: "Truck:", value: arrivalCardsData.truck },
    { label: "Total weight, kg:", value: arrivalCardsData.weight },
    {
      label: "Status:",
      value: <DelayBadge text={truckStatus} delay={delay.delayMinutes} />,
    },
    { label: "Departure date:", value: formattedDepartureDate },
    { label: "Arrival date:", value: formattedArrivalDate },
    { label: "Time delay:", value: formattedDelay },
  ];

  return (
    <Surface className="p-6 flex flex-col shadow-sm">
      <header
        onClick={handleClick}
        className="flex items-center justify-between"
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {arrivalCardsData.truck} <span className="hidden sm:inline">| {arrivalCardsData.destination}</span>
        </h2>
        <p className="flex items-center gap-5">
          <span className="hidden xs:inline text-sm text-gray-500">
            {formattedDepartureDate}
          </span>
          <ExpandButton as={"span"} homeColor={COLORS.purple} isOpen={isOpen} />
        </p>
      </header>
      <div
        className={`
          grid gap-2 text-gray-700 overflow-hidden transition-all duration-500
          ${
            isOpen
              ? "max-h-96 opacity-100 border-t-1 mt-2 pt-2"
              : "max-h-0 opacity-0"
          }
        `}
      >
        {rows.map((row, index) => (
          <ArrivalInfoRow
            key={index}
            labelClassName="font-bold"
            label={row.label}
            value={row.value}
          />
        ))}
      </div>
    </Surface>
  );
}
