"use client";

import { ShipmentsInformationCardType } from "@/types/truck";
import { TruckDetailsCard } from "@/components/ui/cards/TruckDetailsCard/TruckDetailsCard";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { TruckDetailsCardHeader } from "@/components/ui/cards/TruckDetailsCard/TruckDetailsCardHeader";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { useRouter } from "next/navigation";
import { PAGES_CONFIG } from "@/config/pages.config";

interface IAvailableShipmentsCardsProps {
  shipments: ShipmentsInformationCardType[];
  className?: string;
}

export function AvailableShipmentsCards({
  shipments,
  className,
}: IAvailableShipmentsCardsProps) {
  const router = useRouter();

  return (
    <article className={className}>
      {shipments.map((shipment) => {
        const formattedDate = formatIsoToDateTime({
          time: shipment.departureDate,
          options: {
            day: true,
            hours: true,
            minutes: true,
            month: true,
          },
        });

        return (
          <TruckDetailsCard
            key={shipment.shipmentNumber}
            onClick={(truckId: string) =>
              router.push(
                PAGES_CONFIG.SHIPMENTS.children.AVAILABLE.children.TRUCK.path(
                  truckId
                )
              )
            }
            {...shipment}
            renderHeader={
              <TruckDetailsCardHeader
                date={formattedDate}
                title={shipment.arriveLocation}
                loadPercentage={calculatePercentage({
                  total: shipment.totalWeight,
                  usage: shipment.usedWeight,
                })}
              />
            }
          />
        );
      })}
    </article>
  );
}
