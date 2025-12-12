import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import clsx from "clsx";
import { ShipmentsTable } from "../ShipmentsTable/ShipmentsTable";
import { ShipmentCards } from "../ShipmentsCard/ShipmentCards";

export const data: ITruckShipmentsAdditionalInformation[] = [
  {
    id: 1,
    departureLocation: "Valencia",
    arriveLocation: "Barcelona",
    truckId: "B4:35324",
    shipmentNumber: "B437292",
    departureDate: "2025-09-08T02:05:57.645Z",
    arriveDate: "2025-09-09T06:05:57.645Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 2,
    departureLocation: "Valencia",
    arriveLocation: "Barcelona",
    truckId: "B4:35324",
    shipmentNumber: "B437292",
    departureDate: "2025-09-09T02:05:57.645Z",
    arriveDate: "2025-09-09T05:05:57.645Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 3,
    departureLocation: "Valencia",
    arriveLocation: "Barcelona",
    truckId: "B4:35324",
    shipmentNumber: "B437292",
    departureDate: "2025-09-07T02:05:57.645Z",
    arriveDate: "2025-09-09T04:05:57.645Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 4,
    departureLocation: "Madrid",
    arriveLocation: "Lisbon",
    truckId: "M1:98421",
    shipmentNumber: "M192837",
    departureDate: "2025-09-06T10:15:00.000Z",
    arriveDate: "2025-09-06T16:45:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 5,
    departureLocation: "Paris",
    arriveLocation: "Lyon",
    truckId: "P7:55482",
    shipmentNumber: "P777123",
    departureDate: "2025-09-05T07:30:00.000Z",
    arriveDate: "2025-09-05T13:20:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 6,
    departureLocation: "Berlin",
    arriveLocation: "Hamburg",
    truckId: "D3:11223",
    shipmentNumber: "D998877",
    departureDate: "2025-09-08T03:50:00.000Z",
    arriveDate: "2025-09-08T08:10:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 7,
    departureLocation: "Rome",
    arriveLocation: "Milan",
    truckId: "I5:77445",
    shipmentNumber: "I556677",
    departureDate: "2025-09-09T01:45:00.000Z",
    arriveDate: "2025-09-09T07:15:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 8,
    departureLocation: "Amsterdam",
    arriveLocation: "Brussels",
    truckId: "NL2:66331",
    shipmentNumber: "NL445566",
    departureDate: "2025-09-04T04:20:00.000Z",
    arriveDate: "2025-09-04T09:55:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 9,
    departureLocation: "Warsaw",
    arriveLocation: "Krakow",
    truckId: "PL9:88776",
    shipmentNumber: "PL112233",
    departureDate: "2025-09-03T08:40:00.000Z",
    arriveDate: "2025-09-03T12:30:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 10,
    departureLocation: "Vienna",
    arriveLocation: "Prague",
    truckId: "AT4:99001",
    shipmentNumber: "AT556644",
    departureDate: "2025-09-10T06:25:00.000Z",
    arriveDate: "2025-09-10T11:15:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 11,
    departureLocation: "Zurich",
    arriveLocation: "Geneva",
    truckId: "CH8:22445",
    shipmentNumber: "CH889977",
    departureDate: "2025-09-07T05:00:00.000Z",
    arriveDate: "2025-09-07T09:45:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 12,
    departureLocation: "London",
    arriveLocation: "Manchester",
    truckId: "UK1:11290",
    shipmentNumber: "UK334455",
    departureDate: "2025-09-08T09:30:00.000Z",
    arriveDate: "2025-09-08T13:50:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 13,
    departureLocation: "Oslo",
    arriveLocation: "Stockholm",
    truckId: "NO7:77543",
    shipmentNumber: "NO778899",
    departureDate: "2025-09-09T07:20:00.000Z",
    arriveDate: "2025-09-09T12:10:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
];

const tableHeader = [
  "Destination",
  "Shipment number",
  "Truck",
  "Total weight, kg",
  "Status",
  "Departure date",
  "Arrival date",
  "Time delay",
];

export function ArrivalShipmentsContainer({
  classNameTable,
  classNameCards,
}: {
  classNameTable?: string;
  classNameCards?: string;
}) {
  return (
    <>
      <ShipmentsTable
        className={clsx("hidden xl:block", classNameTable)}
        shipments={data}
        tableHeader={tableHeader}
      />
      <ShipmentCards className={clsx("block xl:hidden mt-5", classNameCards)} />
    </>
  );
}
