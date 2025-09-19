import { COLORS, ColorsType } from "@/config/colors.config";

export interface ITruckDelivery {
  id: number;
  destination: string;
  truck: string;
  arrive: string;
  hasTruckArrived: boolean;
}

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

export interface IShipmentsArrival extends ITruckDelivery {
  weight: number;
  departure: string;
  shipmentNumber: string;
}
