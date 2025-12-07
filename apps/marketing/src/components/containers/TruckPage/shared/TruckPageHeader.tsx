"use client";

import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";

export function TruckPageHeader({
  title,
  timeAction,
  shipmentNumber,
  renderRightSide,
}: Pick<ITruckShipmentsAdditionalInformation, "shipmentNumber"> & {
  renderRightSide?: React.ReactNode;
  title: string;
  timeAction: string;
}) {
  const formattedDate = formatIsoToDateTime({
    time: timeAction,
    options: {
      day: true,
      hours: true,
      minutes: true,
      month: true,
    },
  });

  return (
    <header className="md:flex justify-between">
      <div className="flex flex-wrap justify-between sm:justify-start sm:gap-3 sm:items-center">
        <div>
          <p>
            <span className="font-bold text-md sm:text-xl">{title}, </span>
            <span className="font-bold text-md sm:text-xl">
              {shipmentNumber}
            </span>
          </p>
        </div>
        <div>
          <span className="text-xs opacity-50 sm:text-sm">{formattedDate}</span>
        </div>
      </div>
      {renderRightSide}
    </header>
  );
}
