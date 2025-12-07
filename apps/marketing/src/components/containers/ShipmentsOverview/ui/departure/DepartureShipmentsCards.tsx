"use client";

import { TruckDetailsCard } from "@/components/ui/cards/TruckDetailsCard/TruckDetailsCard";
import { TruckDetailsCardHeader } from "@/components/ui/cards/TruckDetailsCard/TruckDetailsCardHeader";
import { PAGES_CONFIG } from "@/config/pages.config";
import { ShipmentsInformationCardType } from "@/types/truck";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { useRouter } from "next/navigation";

interface IDepartureShipmentsCardsProps {
  shipments: ShipmentsInformationCardType[];
  className?: string;
}

export function DepartureShipmentsCards({
  shipments,
  className,
}: IDepartureShipmentsCardsProps) {
  const router = useRouter();

  return (
    <article className={className}>
      {shipments.map((shipment) => {
        const formattedArrivalDate = formatIsoToDateTime({
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
            onClick={(truckId) =>
              router.push(
                PAGES_CONFIG.SHIPMENTS.children.DEPARTURE.children.TRUCK.path(
                  truckId
                )
              )
            }
            {...shipment}
            renderHeader={
              <TruckDetailsCardHeader
                date={`${formattedArrivalDate}`}
                title={`${shipment.arriveLocation} - ${shipment.departureLocation}`}
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
