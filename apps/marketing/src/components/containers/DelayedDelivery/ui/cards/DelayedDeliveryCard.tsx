import { IconButton } from "@/components/elements/buttons/IconButton";
import { ITruckDelivery } from "@/types/truck";

interface Props {
  truckInformation: ITruckDelivery;
  onCardClick?: (row: ITruckDelivery) => void;
}

export function DelayedDeliveryCard({ truckInformation, onCardClick }: Props) {
  return (
    <div
      className="bg-white shadow rounded-lg p-4 cursor-pointer flex justify-between items-center"
      onClick={() => onCardClick?.(truckInformation)}
    >
      <div>
        <div className="font-bold">{truckInformation.destination}</div>
        <div className="text-gray-600">{truckInformation.truck}</div>
      </div>
      <IconButton  
        icon="/icons/left-click.svg" 
        nameIcon="click" 
        size={30}
      />
    </div>
  );
}
