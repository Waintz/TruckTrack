import { COLORS, ColorsType } from "@/config/colors.config";

export interface ITruckDelivery {
  id: number;
  truckId: string;
  arriveDate: string;
  departureDate: string;
  arriveLocation: string;
  departureLocation: string;
  hasTruckArrived: boolean;
}

export interface ITruckShipmentsAdditionalInformation extends ITruckDelivery {
  usedWeight: number;
  totalWeight: number;
  shipmentNumber: string | number;
}

export type ShipmentsInformationCardType = Pick<
  ITruckShipmentsAdditionalInformation,
  | "arriveLocation"
  | "departureDate"
  | "departureLocation"
  | "arriveDate"
  | "totalWeight"
  | "shipmentNumber"
  | "truckId"
  | "usedWeight"
>;

export interface IDailyMetric {
  name: string;
  completed: number;
  total: number;
}

export interface ITruckLoad {
  id: number;
  destination: string;
  truck: string;
  loaded: number;
}

export type RecentRequestType =
  | "Truck breakdown"
  | "Warehouse delay"
  | "Route change"
  | "Customs issue"
  | "Other";

export interface IRecentRequests {
  id: number;
  truck: string;
  type: RecentRequestType;
  destination: string;
  timeAgo: string;
}

export const TruckStatusColors: Pick<ColorsType, "green" | "red" | "orange"> = {
  green: COLORS.green,
  orange: COLORS.orange,
  red: COLORS.red,
};

export type TruckStatus = "Delayed" | "On way" | "Arrived";

export interface IParcel {
  id: number;
  parcelNumber: string;
  valueWeight: number;
  admissionDate: string;
}

export const TECH_INFO_KEYS = {
  FUEL_LEVEL: "Fuel level",
  ENGINE_TEMP: "Engine temp",
  DISTANCE_TRAVELED: "Distance traveled",
  TIRE_PRESSURE: "Tire pressure",
  FUEL_CONSUMPTION: "Fuel consumption",
  LAST_MAINTENANCE: "Last maintenance",
  AVERAGE_SPEED: "Average speed",
  OIL_CONDITION: "Oil condition",
} as const;

export type TechnicalPossibleNotes = "date";

export type VariantTechnicalInformation =
  typeof TECH_INFO_KEYS[keyof typeof TECH_INFO_KEYS];

export type TechnicalInformationTruck = {
  [K in VariantTechnicalInformation]?: {
    value: string;
    unit?: string;
    note?: TechnicalPossibleNotes;
  };
};
