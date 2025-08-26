import { ModalLayout } from "@/components/ui/layouts/ModalLayout";
import { DelayedDeliveryTable } from "../DelayedDeliveryTable/DelayedDeliveryTable";
import { ITruckDelivery } from "@/types/truck";

interface Props {
  onClose: () => void;
  viewMode: "table" | "card" | null;
}

const data: ITruckDelivery[] = [
  {
    id: 1,
    destination: "Valencia - Barcelona",
    truck: "B4:35324",
    arrive: "07:05 AM",
    delay: 5.05,
  },
  {
    id: 2,
    destination: "Cordoba - Barcelona",
    truck: "B4:38987",
    arrive: "10:05 AM",
    delay: 2.05,
  },
  {
    id: 3,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 4,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 5,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 6,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 7,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 8,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 9,
    destination: "Valencia - Barcelona",
    truck: "B4:35324",
    arrive: "07:05 AM",
    delay: 5.05,
  },
  {
    id: 10,
    destination: "Cordoba - Barcelona",
    truck: "B4:38987",
    arrive: "10:05 AM",
    delay: 2.05,
  },
  {
    id: 11,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
  {
    id: 12,
    destination: "Seville - Barcelona",
    truck: "B4:35322",
    arrive: "11:40 AM",
    delay: 0.3,
  },
];

export function DelayedDeliveryModal({ onClose, viewMode }: Props) {
  return (
    <ModalLayout onClose={onClose}>
      {viewMode === "table" && (
        <DelayedDeliveryTable delayedDeliveryTrucks={data} />
      )}
      {viewMode === "card" && <div>Card view coming soon...</div>}
    </ModalLayout>
  );
}
