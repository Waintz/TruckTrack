import { IRecentRequests } from "@/types/truck";
import { RecentRequestsView } from "./RecentRequestsView";

export const recentRequestsMock: IRecentRequests[] = [
  {
    id: 1,
    truck: 'B4:35324',
    type: "Truck breakdown",
    destination: "Berlin, Germany",
    timeAgo: "1",
  },
  {
    id: 2,
    truck: 'B4:38987',
    type: "Warehouse delay",
    destination: "Warsaw, Poland",
    timeAgo: "30",
  },
  {
    id: 3,
    truck: 'B4:35322',
    type: "Route change",
    destination: "Paris, France",
    timeAgo: "60",
  },
  {
    id: 4,
    truck: 'B4:38987',
    type: "Customs issue",
    destination: "Prague, Czech Republic",
    timeAgo: "120",
  },
  {
    id: 5,
    truck: 'B4:35324',
    type: "Other",
    destination: "Vienna, Austria",
    timeAgo: "180",
  },
];

export function RecentRequestsContainer() {
  return <RecentRequestsView recentRequests={recentRequestsMock.slice(0, 3)} />;
}
