"use client";

import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";

export function TruckPageHeader({
  arrive,
  destination,
  shipmentNumber,
}: Pick<
  ITruckShipmentsAdditionalInformation,
  "destination" | "arrive" | "shipmentNumber"
>) {
  const formattedDate = formatIsoToDateTime({
    time: arrive,
    options: {
      day: true,
      hours: true,
      minutes: true,
      month: true,
    },
  });

  return (
    <header className="flex flex-wrap justify-between sm:justify-start sm:gap-3 sm:items-center">
      <div>
        <p>
          <span className="font-bold text-md sm:text-xl">{destination}, </span>
          <span className="font-bold text-md sm:text-xl">{shipmentNumber}</span>
        </p>
      </div>
      <div>
        <span className="text-xs opacity-50 sm:text-sm">{formattedDate}</span>
      </div>
    </header>
  );
}
