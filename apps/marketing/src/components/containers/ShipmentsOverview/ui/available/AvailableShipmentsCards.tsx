import { ShipmentsInformationCardType } from "@/types/truck";
import { AvailableShipmentsCard } from "./AvailableShipmentsCard";

interface IAvailableShipmentsCardsProps {
  shipments: ShipmentsInformationCardType[];
  className?: string;
}

export function AvailableShipmentsCards({
  shipments,
  className,
}: IAvailableShipmentsCardsProps) {
  return (
    <article className={className}>
      {shipments.map((shipment) => {
        return (
          <AvailableShipmentsCard
            key={shipment.shipmentNumber}
            ShipmentsInformation={shipment}
          />
        );
      })}
    </article>
  );
}
