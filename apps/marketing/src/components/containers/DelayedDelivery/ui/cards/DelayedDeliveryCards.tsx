import { ITruckDelivery } from "@/types/truck";
import { DelayedDeliveryCard } from "./DelayedDeliveryCard";
import { CardList } from "@/components/shared/CardList";

interface Props {
  delayedDeliveryTrucks: ITruckDelivery[];
  onRowClick?: (row: ITruckDelivery) => void;
}

export function DelayedDeliveryCards({
  delayedDeliveryTrucks,
  onRowClick,
}: Props) {
  return (
    <CardList
      items={delayedDeliveryTrucks}
      renderItem={(row) => (
        <DelayedDeliveryCard
          key={row.id}
          truckInformation={row}
          onCardClick={onRowClick}
        />
      )}
    />
  );
}
