import { DelayBadge } from "@/components/elements/DelayBadge";
import { TableList } from "@/components/shared/TableList";
import { ITruckDelivery } from "@/types/truck";
import React from "react";

interface Props {
  delayedDeliveryTrucks: ITruckDelivery[];
  limit?: number;
}

const headerTable: string[] = [
  "Destination",
  "Truck",
  "Time arrive",
  "Time delay",
];

export function DelayedDeliveryTable({ delayedDeliveryTrucks, limit }: Props) {
  const effectiveLimit = limit ?? delayedDeliveryTrucks.length;
  return (
    <TableList
      className="hidden md:grid"
      headerColumns={headerTable}
      itemsData={delayedDeliveryTrucks.slice(0, effectiveLimit)}
      renderColumnHeader={(column) => (
        <div className="bg-gray-100 p-3 font-bold opacity-50 border-b border-gray-200">
          {column}
        </div>
      )}
      renderRow={(row, index) => (
        <>
          <div
            style={
              index < effectiveLimit - 1
                ? { borderBottom: "1px solid #e5e7eb" }
                : {}
            }
            className="p-3 "
          >
            {row.destination}
          </div>
          <div
            style={
              index < effectiveLimit - 1
                ? { borderBottom: "1px solid #e5e7eb" }
                : {}
            }
            className="p-3 "
          >
            {row.truck}
          </div>
          <div
            style={
              index < effectiveLimit - 1
                ? { borderBottom: "1px solid #e5e7eb" }
                : {}
            }
            className="p-3 "
          >
            {row.arrive}
          </div>
          <div
            style={
              index < effectiveLimit - 1
                ? { borderBottom: "1px solid #e5e7eb" }
                : {}
            }
            className="p-3 flex justify-start"
          >
            <DelayBadge delay={row.delay} text={`${row.delay.toFixed(2)} h`} />
          </div>
        </>
      )}
      columnWidths={["3fr", "2fr", "2fr", "2fr"]}
    />
  );
}
