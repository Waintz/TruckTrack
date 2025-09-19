"use client";

import { DelayBadge } from "@/components/elements/DelayBadge";
import { TableList } from "@/components/shared/TableList";
import { IShipmentsArrival } from "@/types/truck";
import { calculateDelay } from "@/utils/calculateDelay";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { formatMinutesToHHMM } from "@/utils/formatMinutesToHHMM";
import { getTruckStatus } from "@/utils/getTruckStatus";
import clsx from "clsx";
import React from "react";

const headerT = [
  "Destination",
  "Shipment number",
  "Truck",
  "Total weight, kg",
  "Status",
  "Departure date",
  "Arrival date",
  "Time delay",
];

const data: IShipmentsArrival[] = [
  {
    id: 1,
    destination: "Valencia - Barcelona",
    truck: "B4:35324",
    shipmentNumber: "B437292",
    departure: "2025-09-08T02:05:57.645Z",
    arrive: "2025-09-09T06:05:57.645Z",
    weight: 800,
    hasTruckArrived: false,
  },
  {
    id: 2,
    destination: "Valencia - Barcelona",
    truck: "B4:35324",
    shipmentNumber: "B437292",
    departure: "2025-09-09T02:05:57.645Z",
    arrive: "2025-09-09T05:05:57.645Z",
    weight: 800,
    hasTruckArrived: false,
  },
  {
    id: 3,
    destination: "Valencia - Barcelona",
    truck: "B4:35324",
    shipmentNumber: "B437292",
    departure: "2025-09-07T02:05:57.645Z",
    arrive: "2025-09-09T04:05:57.645Z",
    weight: 800,
    hasTruckArrived: false,
  },
  {
    id: 4,
    destination: "Madrid - Lisbon",
    truck: "M1:98421",
    shipmentNumber: "M192837",
    departure: "2025-09-06T10:15:00.000Z",
    arrive: "2025-09-06T16:45:00.000Z",
    weight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 5,
    destination: "Paris - Lyon",
    truck: "P7:55482",
    shipmentNumber: "P777123",
    departure: "2025-09-05T07:30:00.000Z",
    arrive: "2025-09-05T13:20:00.000Z",
    weight: 950,
    hasTruckArrived: false,
  },
  {
    id: 6,
    destination: "Berlin - Hamburg",
    truck: "D3:11223",
    shipmentNumber: "D998877",
    departure: "2025-09-08T03:50:00.000Z",
    arrive: "2025-09-08T08:10:00.000Z",
    weight: 1430,
    hasTruckArrived: true,
  },
  {
    id: 7,
    destination: "Rome - Milan",
    truck: "I5:77445",
    shipmentNumber: "I556677",
    departure: "2025-09-09T01:45:00.000Z",
    arrive: "2025-09-09T07:15:00.000Z",
    weight: 700,
    hasTruckArrived: false,
  },
  {
    id: 8,
    destination: "Amsterdam - Brussels",
    truck: "NL2:66331",
    shipmentNumber: "NL445566",
    departure: "2025-09-04T04:20:00.000Z",
    arrive: "2025-09-04T09:55:00.000Z",
    weight: 1100,
    hasTruckArrived: true,
  },
  {
    id: 9,
    destination: "Warsaw - Krakow",
    truck: "PL9:88776",
    shipmentNumber: "PL112233",
    departure: "2025-09-03T08:40:00.000Z",
    arrive: "2025-09-03T12:30:00.000Z",
    weight: 600,
    hasTruckArrived: false,
  },
  {
    id: 10,
    destination: "Vienna - Prague",
    truck: "AT4:99001",
    shipmentNumber: "AT556644",
    departure: "2025-09-10T06:25:00.000Z",
    arrive: "2025-09-10T11:15:00.000Z",
    weight: 1320,
    hasTruckArrived: true,
  },
  {
    id: 11,
    destination: "Zurich - Geneva",
    truck: "CH8:22445",
    shipmentNumber: "CH889977",
    departure: "2025-09-07T05:00:00.000Z",
    arrive: "2025-09-07T09:45:00.000Z",
    weight: 875,
    hasTruckArrived: false,
  },
  {
    id: 12,
    destination: "London - Manchester",
    truck: "UK1:11290",
    shipmentNumber: "UK334455",
    departure: "2025-09-08T09:30:00.000Z",
    arrive: "2025-09-08T13:50:00.000Z",
    weight: 1500,
    hasTruckArrived: true,
  },
  {
    id: 13,
    destination: "Oslo - Stockholm",
    truck: "NO7:77543",
    shipmentNumber: "NO778899",
    departure: "2025-09-09T07:20:00.000Z",
    arrive: "2025-09-09T12:10:00.000Z",
    weight: 980,
    hasTruckArrived: false,
  },
];

export function ArrivalTable({ className }: { className?: string }) {
  return (
    <TableList
      rowsClassName="bg-white mt-0.5"
      className={clsx("mt-8", className)}
      headerColumns={headerT}
      itemsData={data}
      renderColumnHeader={(column) => {
        return (
          <div className="bg-gray-100 p-3 whitespace-nowrap overflow-hidden text-ellipsis font-bold opacity-50 border-b mb-2 border-gray-200">
            {column}
          </div>
        );
      }}
      columnWidths={["5fr", "4fr", "3fr", "3fr", "2fr", "3fr", "3fr", "3fr"]}
      renderRow={(row) => {
        const delay = calculateDelay(row.arrive);
        const truckStatus = getTruckStatus(
          row.departure,
          row.arrive,
          row.hasTruckArrived
        );
        const formattedDelay =
          delay !== null
            ? formatMinutesToHHMM({ time: delay.delayMinutes })
            : "-";

        return (
          <React.Fragment>
            <div className="p-3 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:text-purple">
              {row.destination}
            </div>
            <div className="p-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {row.shipmentNumber}
            </div>
            <div className="p-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {row.truck}
            </div>
            <div className="p-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {row.weight}
            </div>
            <div className="p-2.5 flex justify-start">
              <DelayBadge
                delay={delay?.delayMinutes || 0}
                text={`${truckStatus}`}
              />
            </div>
            <div className="p-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {formatIsoToDateTime({
                time: row.departure,
                options: { day: true, hours: true, minutes: true, month: true },
              })}
            </div>
            <div className="p-3 whitespace-nowrap overflow-hidden text-ellipsis">
              {formatIsoToDateTime({
                time: row.arrive,
                options: { day: true, hours: true, minutes: true, month: true },
              })}
            </div>
            <div className="p-2.5 flex justify-start">{formattedDelay}</div>
          </React.Fragment>
        );
      }}
    />
  );
}
