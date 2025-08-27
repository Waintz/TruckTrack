export interface ITruckDelivery {
  id: number;
  destination: string;
  truck: string;
  arrive: string;
  delay: number;
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
  | "Truck breakdown" // поломка грузовика
  | "Warehouse delay" // задержка на складе
  | "Route change" // изменение маршрута
  | "Customs issue" // таможенный вопрос
  | "Other";

export interface IRecentRequests {
  id: number;
  type: RecentRequestType;
  destination: string;
  timeAgo: string;
}
