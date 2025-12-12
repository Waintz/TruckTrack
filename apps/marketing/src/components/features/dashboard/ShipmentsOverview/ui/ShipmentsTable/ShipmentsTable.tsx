"use client";

import { TableList } from "@/components/shared/TableList/TableList";
import clsx from "clsx";
import React from "react";
import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import { ShipmentCells } from "./ShipmentCells";

export function ShipmentsTable({
  className,
  shipments,
  tableHeader,
}: {
  className?: string;
  shipments: ITruckShipmentsAdditionalInformation[];
  tableHeader: string[];
}) {
  return (
    <TableList
      rowsClassName="bg-white mt-0.5 cursor-pointer hover:bg-gray-100 transition-colors"
      className={clsx("mt-8", className)}
      headerColumns={tableHeader}
      itemsData={shipments}
      renderColumnHeader={(column) => {
        return (
          <div className="bg-gray-100 p-3 whitespace-nowrap overflow-hidden text-ellipsis font-bold opacity-50 border-b mb-2 border-gray-200">
            {column}
          </div>
        );
      }}
      columnWidths={["5fr", "4fr", "3fr", "3fr", "2fr", "3fr", "3fr", "3fr"]}
      renderRow={(row) => {
        return (
          <React.Fragment>
            <ShipmentCells row={row} />
          </React.Fragment>
        );
      }}
    />
  );
}
