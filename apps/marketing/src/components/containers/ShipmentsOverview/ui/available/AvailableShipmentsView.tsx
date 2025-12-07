import { ShipmentsInformationCardType } from "@/types/truck";
import { AvailableShipmentsCards } from "./AvailableShipmentsCards";
import clsx from "clsx";

export const ShipmentsInformation: ShipmentsInformationCardType[] = [
  {
    arriveLocation: "New York",
    departureLocation: "Chicago", // Заменено
    arriveDate: "2023-10-15T10:00:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 20000,
    shipmentNumber: "V45322",
    truckId: "Truck A",
    usedWeight: 5000,
  },
  {
    arriveLocation: "Los Angeles",
    departureLocation: "Phoenix", // Заменено
    arriveDate: "2023-10-16T12:00:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 25000,
    shipmentNumber: "J37291",
    truckId: "Truck B",
    usedWeight: 12500,
  },
  {
    arriveLocation: "Chicago",
    departureLocation: "Detroit", // Заменено
    arriveDate: "2023-10-17T09:30:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 18000,
    shipmentNumber: "C18452",
    truckId: "Truck C",
    usedWeight: 18000,
  },
  {
    arriveLocation: "Houston",
    departureLocation: "Dallas", // Заменено
    arriveDate: "2023-10-18T14:15:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 22000,
    shipmentNumber: "H92731",
    truckId: "Truck D",
    usedWeight: 2200,
  },
  {
    arriveLocation: "San Francisco",
    departureLocation: "Los Angeles", // Заменено
    arriveDate: "2023-10-19T11:45:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 24000,
    shipmentNumber: "S44192",
    truckId: "Truck E",
    usedWeight: 12000,
  },
  {
    arriveLocation: "Miami",
    departureLocation: "Atlanta", // Заменено
    arriveDate: "2023-10-20T13:00:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 19000,
    shipmentNumber: "M33124",
    truckId: "Truck F",
    usedWeight: 4750,
  },
  {
    arriveLocation: "Seattle",
    departureLocation: "Portland", // Заменено
    arriveDate: "2023-10-21T15:20:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 26000,
    shipmentNumber: "SE52142",
    truckId: "Truck G",
    usedWeight: 19500,
  },
  {
    arriveLocation: "Denver",
    departureLocation: "Salt Lake City", // Заменено
    arriveDate: "2023-10-22T08:50:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 17000,
    shipmentNumber: "D91823",
    truckId: "Truck H",
    usedWeight: 17000,
  },
  {
    arriveLocation: "Boston",
    departureLocation: "New York", // Заменено
    arriveDate: "2023-10-23T16:40:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 21000,
    shipmentNumber: "B73219",
    truckId: "Truck I",
    usedWeight: 5250,
  },
  {
    arriveLocation: "Atlanta",
    departureLocation: "Nashville", // Заменено
    arriveDate: "2023-10-24T10:10:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 23000,
    shipmentNumber: "A89231",
    truckId: "Truck J",
    usedWeight: 17250,
  },
  {
    arriveLocation: "Dallas",
    departureLocation: "Austin", // Заменено
    arriveDate: "2023-10-25T12:30:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 25000,
    shipmentNumber: "DA19284",
    truckId: "Truck K",
    usedWeight: 25000,
  },
  {
    arriveLocation: "Philadelphia",
    departureLocation: "Boston", // Заменено
    arriveDate: "2023-10-26T14:00:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 20000,
    shipmentNumber: "P37821",
    truckId: "Truck L",
    usedWeight: 2000,
  },
  {
    arriveLocation: "Phoenix",
    departureLocation: "Las Vegas", // Заменено
    arriveDate: "2023-10-27T09:00:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 22000,
    shipmentNumber: "PH82173",
    truckId: "Truck M",
    usedWeight: 11000,
  },
  {
    arriveLocation: "Portland",
    departureLocation: "Seattle", // Заменено
    arriveDate: "2023-10-28T17:30:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 19000,
    shipmentNumber: "PO21738",
    truckId: "Truck N",
    usedWeight: 14250,
  },
  {
    arriveLocation: "Las Vegas",
    departureLocation: "Los Angeles", // Заменено
    arriveDate: "2023-10-29T11:25:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 21000,
    shipmentNumber: "LV91283",
    truckId: "Truck O",
    usedWeight: 2100,
  },
  {
    arriveLocation: "San Diego",
    departureLocation: "San Francisco", // Заменено
    arriveDate: "2023-10-30T13:15:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 24000,
    shipmentNumber: "SD72193",
    truckId: "Truck P",
    usedWeight: 6000,
  },
  {
    arriveLocation: "Detroit",
    departureLocation: "Cleveland", // Заменено
    arriveDate: "2023-10-31T10:45:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 23000,
    shipmentNumber: "DT28371",
    truckId: "Truck Q",
    usedWeight: 11500,
  },
  {
    arriveLocation: "Minneapolis",
    departureLocation: "Chicago", // Заменено
    arriveDate: "2023-11-01T12:10:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 18000,
    shipmentNumber: "MN47192",
    truckId: "Truck R",
    usedWeight: 13500,
  },
  {
    arriveLocation: "San Jose",
    departureLocation: "San Francisco", // Заменено
    arriveDate: "2023-11-02T14:50:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 20000,
    shipmentNumber: "SJ81372",
    truckId: "Truck S",
    usedWeight: 20000,
  },
  {
    arriveLocation: "Austin",
    departureLocation: "Houston", // Заменено
    arriveDate: "2023-11-03T09:35:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 25000,
    shipmentNumber: "AU21938",
    truckId: "Truck T",
    usedWeight: 2500,
  },
  {
    arriveLocation: "Orlando",
    departureLocation: "Miami", // Заменено
    arriveDate: "2023-11-04T15:00:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 22000,
    shipmentNumber: "OR93281",
    truckId: "Truck U",
    usedWeight: 5500,
  },
  {
    arriveLocation: "Cleveland",
    departureLocation: "Pittsburgh", // Заменено
    arriveDate: "2023-11-05T11:20:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 21000,
    shipmentNumber: "CL12839",
    truckId: "Truck V",
    usedWeight: 10500,
  },
  {
    arriveLocation: "Charlotte",
    departureLocation: "Atlanta", // Заменено
    arriveDate: "2023-11-06T10:40:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 19000,
    shipmentNumber: "CH98231",
    truckId: "Truck W",
    usedWeight: 14250,
  },
  {
    arriveLocation: "Kansas City",
    departureLocation: "St. Louis", // Заменено
    arriveDate: "2023-11-07T13:25:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 23000,
    shipmentNumber: "KC81293",
    truckId: "Truck X",
    usedWeight: 23000,
  },
  {
    arriveLocation: "Salt Lake City",
    departureLocation: "Denver", // Заменено
    arriveDate: "2023-11-08T09:55:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 24000,
    shipmentNumber: "SL19283",
    truckId: "Truck Y",
    usedWeight: 2400,
  },
  {
    arriveLocation: "St. Louis",
    departureLocation: "Kansas City", // Заменено
    arriveDate: "2023-11-09T16:10:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 20000,
    shipmentNumber: "ST87312",
    truckId: "Truck Z",
    usedWeight: 5000,
  },
  {
    arriveLocation: "Pittsburgh",
    departureLocation: "Columbus", // Заменено
    arriveDate: "2023-11-10T12:15:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 22000,
    shipmentNumber: "PI18293",
    truckId: "Truck AA",
    usedWeight: 11000,
  },
  {
    arriveLocation: "Indianapolis",
    departureLocation: "Chicago", // Заменено
    arriveDate: "2023-11-11T14:05:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 21000,
    shipmentNumber: "IN91823",
    truckId: "Truck AB",
    usedWeight: 15750,
  },
  {
    arriveLocation: "Columbus",
    departureLocation: "Cleveland", // Заменено
    arriveDate: "2023-11-12T10:30:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 23000,
    shipmentNumber: "CO37192",
    truckId: "Truck AC",
    usedWeight: 23000,
  },
  {
    arriveLocation: "Nashville",
    departureLocation: "Atlanta", // Заменено
    arriveDate: "2023-11-13T15:45:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 25000,
    shipmentNumber: "NA89213",
    truckId: "Truck AD",
    usedWeight: 6250,
  },
  {
    arriveLocation: "Tampa",
    departureLocation: "Orlando", // Заменено
    arriveDate: "2023-11-14T11:55:00Z",
    departureDate: "1970-01-01T00:00:00Z",
    totalWeight: 18000,
    shipmentNumber: "TA18392",
    truckId: "Truck AE",
    usedWeight: 9000,
  },
];

export function AvailableShipmentsView({ className }: { className?: string }) {
  return (
    <>
      <AvailableShipmentsCards
        className={clsx(
          "mt-7 grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]",
          className
        )}
        shipments={ShipmentsInformation}
      />
    </>
  );
}
