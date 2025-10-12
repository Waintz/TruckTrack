import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import { ArrivalTable } from "./ArrivalTable";
import { ArrivalCards } from "./ArrivalCards";
import clsx from "clsx";

const data: ITruckShipmentsAdditionalInformation[] = [
  {
    id: 1,
    destination: "Valencia - Barcelona",
    truckId: "B4:35324",
    shipmentNumber: "B437292",
    departure: "2025-09-08T02:05:57.645Z",
    arrive: "2025-09-09T06:05:57.645Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 2,
    destination: "Valencia - Barcelona",
    truckId: "B4:35324",
    shipmentNumber: "B437292",
    departure: "2025-09-09T02:05:57.645Z",
    arrive: "2025-09-09T05:05:57.645Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 3,
    destination: "Valencia - Barcelona",
    truckId: "B4:35324",
    shipmentNumber: "B437292",
    departure: "2025-09-07T02:05:57.645Z",
    arrive: "2025-09-09T04:05:57.645Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 4,
    destination: "Madrid - Lisbon",
    truckId: "M1:98421",
    shipmentNumber: "M192837",
    departure: "2025-09-06T10:15:00.000Z",
    arrive: "2025-09-06T16:45:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 5,
    destination: "Paris - Lyon",
    truckId: "P7:55482",
    shipmentNumber: "P777123",
    departure: "2025-09-05T07:30:00.000Z",
    arrive: "2025-09-05T13:20:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 6,
    destination: "Berlin - Hamburg",
    truckId: "D3:11223",
    shipmentNumber: "D998877",
    departure: "2025-09-08T03:50:00.000Z",
    arrive: "2025-09-08T08:10:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 7,
    destination: "Rome - Milan",
    truckId: "I5:77445",
    shipmentNumber: "I556677",
    departure: "2025-09-09T01:45:00.000Z",
    arrive: "2025-09-09T07:15:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 8,
    destination: "Amsterdam - Brussels",
    truckId: "NL2:66331",
    shipmentNumber: "NL445566",
    departure: "2025-09-04T04:20:00.000Z",
    arrive: "2025-09-04T09:55:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 9,
    destination: "Warsaw - Krakow",
    truckId: "PL9:88776",
    shipmentNumber: "PL112233",
    departure: "2025-09-03T08:40:00.000Z",
    arrive: "2025-09-03T12:30:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 10,
    destination: "Vienna - Prague",
    truckId: "AT4:99001",
    shipmentNumber: "AT556644",
    departure: "2025-09-10T06:25:00.000Z",
    arrive: "2025-09-10T11:15:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 11,
    destination: "Zurich - Geneva",
    truckId: "CH8:22445",
    shipmentNumber: "CH889977",
    departure: "2025-09-07T05:00:00.000Z",
    arrive: "2025-09-07T09:45:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: false,
  },
  {
    id: 12,
    destination: "London - Manchester",
    truckId: "UK1:11290",
    shipmentNumber: "UK334455",
    departure: "2025-09-08T09:30:00.000Z",
    arrive: "2025-09-08T13:50:00.000Z",
    usedWeight: 800,
    totalWeight: 1200,
    hasTruckArrived: true,
  },
  {
    id: 13,
    destination: "Oslo - Stockholm",
    truckId: "NO7:77543",
    shipmentNumber: "NO778899",
    departure: "2025-09-09T07:20:00.000Z",
    arrive: "2025-09-09T12:10:00.000Z",
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
      <ArrivalTable
        className={clsx("hidden xl:block", classNameTable)}
        shipments={data}
        tableHeader={tableHeader}
      />
      <ArrivalCards className={clsx("block xl:hidden mt-5", classNameCards)} />
    </>
  );
}
