import { ITruckLoad } from "@/types/truck";
import { AvailableTrucksView } from "./AvailableTrucksView";

const truckLoad: ITruckLoad[] = [
  { id: 1, truck: "B4:35322", destination: "Seville - Barcelona", loaded: 90 },
  { id: 2, truck: "B4:38987", destination: "Cordoba - Barcelona", loaded: 50 },
  { id: 3, truck: "B4:35324", destination: "Valencia - Barcelona", loaded: 20 },
];

export function AvailableTrucksContainer() {
  return <AvailableTrucksView truckLoad={truckLoad} />;
}
