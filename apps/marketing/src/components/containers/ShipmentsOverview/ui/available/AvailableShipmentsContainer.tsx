import { ShipmentsInformationCardType } from "@/types/truck";
import { AvailableShipmentsCards } from "./AvailableShipmentsCards";

const ShipmentsInformation: ShipmentsInformationCardType[] = [
  {
    destination: "New York",
    arrive: "2023-10-15T10:00:00Z",
    totalWeight: 20000,
    shipmentNumber: "V45322",
    truckId: "Truck A",
    usedWeight: 5000,
  }, // 25%
  {
    destination: "Los Angeles",
    arrive: "2023-10-16T12:00:00Z",
    totalWeight: 25000,
    shipmentNumber: "J37291",
    truckId: "Truck B",
    usedWeight: 12500,
  }, // 50%
  {
    destination: "Chicago",
    arrive: "2023-10-17T09:30:00Z",
    totalWeight: 18000,
    shipmentNumber: "C18452",
    truckId: "Truck C",
    usedWeight: 18000,
  }, // 100%
  {
    destination: "Houston",
    arrive: "2023-10-18T14:15:00Z",
    totalWeight: 22000,
    shipmentNumber: "H92731",
    truckId: "Truck D",
    usedWeight: 2200,
  }, // 10%
  {
    destination: "San Francisco",
    arrive: "2023-10-19T11:45:00Z",
    totalWeight: 24000,
    shipmentNumber: "S44192",
    truckId: "Truck E",
    usedWeight: 12000,
  }, // 50%
  {
    destination: "Miami",
    arrive: "2023-10-20T13:00:00Z",
    totalWeight: 19000,
    shipmentNumber: "M33124",
    truckId: "Truck F",
    usedWeight: 4750,
  }, // 25%
  {
    destination: "Seattle",
    arrive: "2023-10-21T15:20:00Z",
    totalWeight: 26000,
    shipmentNumber: "SE52142",
    truckId: "Truck G",
    usedWeight: 19500,
  }, // 75%
  {
    destination: "Denver",
    arrive: "2023-10-22T08:50:00Z",
    totalWeight: 17000,
    shipmentNumber: "D91823",
    truckId: "Truck H",
    usedWeight: 17000,
  }, // 100%
  {
    destination: "Boston",
    arrive: "2023-10-23T16:40:00Z",
    totalWeight: 21000,
    shipmentNumber: "B73219",
    truckId: "Truck I",
    usedWeight: 5250,
  }, // 25%
  {
    destination: "Atlanta",
    arrive: "2023-10-24T10:10:00Z",
    totalWeight: 23000,
    shipmentNumber: "A89231",
    truckId: "Truck J",
    usedWeight: 17250,
  }, // 75%
  {
    destination: "Dallas",
    arrive: "2023-10-25T12:30:00Z",
    totalWeight: 25000,
    shipmentNumber: "DA19284",
    truckId: "Truck K",
    usedWeight: 25000,
  }, // 100%
  {
    destination: "Philadelphia",
    arrive: "2023-10-26T14:00:00Z",
    totalWeight: 20000,
    shipmentNumber: "P37821",
    truckId: "Truck L",
    usedWeight: 2000,
  }, // 10%
  {
    destination: "Phoenix",
    arrive: "2023-10-27T09:00:00Z",
    totalWeight: 22000,
    shipmentNumber: "PH82173",
    truckId: "Truck M",
    usedWeight: 11000,
  }, // 50%
  {
    destination: "Portland",
    arrive: "2023-10-28T17:30:00Z",
    totalWeight: 19000,
    shipmentNumber: "PO21738",
    truckId: "Truck N",
    usedWeight: 14250,
  }, // 75%
  {
    destination: "Las Vegas",
    arrive: "2023-10-29T11:25:00Z",
    totalWeight: 21000,
    shipmentNumber: "LV91283",
    truckId: "Truck O",
    usedWeight: 2100,
  }, // 10%
  {
    destination: "San Diego",
    arrive: "2023-10-30T13:15:00Z",
    totalWeight: 24000,
    shipmentNumber: "SD72193",
    truckId: "Truck P",
    usedWeight: 6000,
  }, // 25%
  {
    destination: "Detroit",
    arrive: "2023-10-31T10:45:00Z",
    totalWeight: 23000,
    shipmentNumber: "DT28371",
    truckId: "Truck Q",
    usedWeight: 11500,
  }, // 50%
  {
    destination: "Minneapolis",
    arrive: "2023-11-01T12:10:00Z",
    totalWeight: 18000,
    shipmentNumber: "MN47192",
    truckId: "Truck R",
    usedWeight: 13500,
  }, // 75%
  {
    destination: "San Jose",
    arrive: "2023-11-02T14:50:00Z",
    totalWeight: 20000,
    shipmentNumber: "SJ81372",
    truckId: "Truck S",
    usedWeight: 20000,
  }, // 100%
  {
    destination: "Austin",
    arrive: "2023-11-03T09:35:00Z",
    totalWeight: 25000,
    shipmentNumber: "AU21938",
    truckId: "Truck T",
    usedWeight: 2500,
  }, // 10%
  {
    destination: "Orlando",
    arrive: "2023-11-04T15:00:00Z",
    totalWeight: 22000,
    shipmentNumber: "OR93281",
    truckId: "Truck U",
    usedWeight: 5500,
  }, // 25%
  {
    destination: "Cleveland",
    arrive: "2023-11-05T11:20:00Z",
    totalWeight: 21000,
    shipmentNumber: "CL12839",
    truckId: "Truck V",
    usedWeight: 10500,
  }, // 50%
  {
    destination: "Charlotte",
    arrive: "2023-11-06T10:40:00Z",
    totalWeight: 19000,
    shipmentNumber: "CH98231",
    truckId: "Truck W",
    usedWeight: 14250,
  }, // 75%
  {
    destination: "Kansas City",
    arrive: "2023-11-07T13:25:00Z",
    totalWeight: 23000,
    shipmentNumber: "KC81293",
    truckId: "Truck X",
    usedWeight: 23000,
  }, // 100%
  {
    destination: "Salt Lake City",
    arrive: "2023-11-08T09:55:00Z",
    totalWeight: 24000,
    shipmentNumber: "SL19283",
    truckId: "Truck Y",
    usedWeight: 2400,
  }, // 10%
  {
    destination: "St. Louis",
    arrive: "2023-11-09T16:10:00Z",
    totalWeight: 20000,
    shipmentNumber: "ST87312",
    truckId: "Truck Z",
    usedWeight: 5000,
  }, // 25%
  {
    destination: "Pittsburgh",
    arrive: "2023-11-10T12:15:00Z",
    totalWeight: 22000,
    shipmentNumber: "PI18293",
    truckId: "Truck AA",
    usedWeight: 11000,
  }, // 50%
  {
    destination: "Indianapolis",
    arrive: "2023-11-11T14:05:00Z",
    totalWeight: 21000,
    shipmentNumber: "IN91823",
    truckId: "Truck AB",
    usedWeight: 15750,
  }, // 75%
  {
    destination: "Columbus",
    arrive: "2023-11-12T10:30:00Z",
    totalWeight: 23000,
    shipmentNumber: "CO37192",
    truckId: "Truck AC",
    usedWeight: 23000,
  }, // 100%
  {
    destination: "Nashville",
    arrive: "2023-11-13T15:45:00Z",
    totalWeight: 25000,
    shipmentNumber: "NA89213",
    truckId: "Truck AD",
    usedWeight: 6250,
  }, // 25%
  {
    destination: "Tampa",
    arrive: "2023-11-14T11:55:00Z",
    totalWeight: 18000,
    shipmentNumber: "TA18392",
    truckId: "Truck AE",
    usedWeight: 9000,
  }, // 50%
];

export function AvailableShipmentsContainer({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <AvailableShipmentsCards
        className="mt-7 grid gap-4 lg:grid-cols-2 fullHd:grid-cols-3"
        shipments={ShipmentsInformation}
      />
    </>
  );
}
