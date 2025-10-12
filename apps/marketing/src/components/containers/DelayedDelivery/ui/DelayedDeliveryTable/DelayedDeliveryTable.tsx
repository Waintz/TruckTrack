import { DelayBadge } from "@/components/elements/DelayBadge";
import { TableList } from "@/components/shared/TableList/TableList";
import { ITruckDelivery } from "@/types/truck";
import { calculateDelay } from "@/utils/calculateDelay";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import {
  formatMinutesToHHMM,
} from "@/utils/formatMinutesToHHMM";
import React from "react";

interface Props {
  delayedDeliveryTrucks: ITruckDelivery[];
  onRowClick?: (row: ITruckDelivery) => void;
  limit?: number;
}

const headerTable: string[] = [
  "Destination",
  "Truck",
  "Time arrive",
  "Time delay",
];

export function DelayedDeliveryTable({
  delayedDeliveryTrucks,
  limit,
  onRowClick,
}: Props) {
  const effectiveLimit = limit ?? delayedDeliveryTrucks.length;
  return (
    <TableList
      onClick={onRowClick}
      className="hidden md:grid"
      headerColumns={headerTable}
      rowsClassName="hover:bg-gray-100 cursor-pointer"
      itemsData={delayedDeliveryTrucks.slice(0, effectiveLimit)}
      renderColumnHeader={(column) => (
        <div className="bg-gray-100 p-3 font-bold opacity-50 border-b border-gray-200">
          {column}
        </div>
      )}
      renderRow={(row, index) => {
        const delay = calculateDelay(row.arrive);
        const formattedDelayToHHMM =
          delay.delaySeconds >= 0
            ? formatMinutesToHHMM({ time: delay.delayMinutes })
            : "-";

        return (
          <React.Fragment>
            <div
              style={
                index < effectiveLimit - 1
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
              className="p-3 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {row.destination}
            </div>
            <div
              style={
                index < effectiveLimit - 1
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
              className="p-3 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {row.truckId}
            </div>
            <div
              style={
                index < effectiveLimit - 1
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
              className="p-3 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {formatIsoToDateTime({ time: row.arrive })}
            </div>
            <div
              style={
                index < effectiveLimit - 1
                  ? { borderBottom: "1px solid #e5e7eb" }
                  : {}
              }
              className="p-2.5 flex justify-start"
            >
              <DelayBadge
                delay={delay?.delayMinutes}
                text={`${formattedDelayToHHMM}`}
              />
            </div>
          </React.Fragment>
        );
      }}
      columnWidths={["3fr", "2fr", "2fr", "2fr"]}
    />
  );
}
