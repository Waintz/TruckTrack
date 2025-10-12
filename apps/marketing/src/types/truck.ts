import { COLORS, ColorsType } from "@/config/colors.config";

export interface ITruckDelivery {
  id: number;
  destination: string;
  truckId: string;
  arrive: string;
  departure: string;
  hasTruckArrived: boolean;
}

export interface ITruckShipmentsAdditionalInformation extends ITruckDelivery {
  usedWeight: number;
  totalWeight: number;
  shipmentNumber: string | number;
}

export type ShipmentsInformationCardType = Pick<
  ITruckShipmentsAdditionalInformation,
  | "destination"
  | "arrive"
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