import { IStatItemProps, StatItem } from "@/components/ui/StatItem";
import { ITruckShipmentsAdditionalInformation } from "@/types/truck";
import clsx from "clsx";
import React, { useMemo } from "react";

type AvailableCardMainInformationProps = Pick<
  ITruckShipmentsAdditionalInformation,
  "totalWeight" | "shipmentNumber" | "truckId" | "usedWeight"
> & {
  className?: string;
};

export function AvailableCardMainInformation({
  className,
  shipmentNumber,
  totalWeight,
  truckId,
  usedWeight,
}: AvailableCardMainInformationProps) {
  const StatsData = useMemo((): IStatItemProps[] => {
    return [
      {
        title: "Available, kg",
        progress: {
          completed: usedWeight,
          total: totalWeight,
        },
      },
      {
        title: "Shipment number",
        value: String(shipmentNumber),
      },
      {
        title: "Truck",
        value: truckId,
      },
    ];
  }, [shipmentNumber, totalWeight, truckId, usedWeight]);

  return (
    <section className={clsx("flex flex-col gap-4", className)}>
      {StatsData.map((item) => (
        <React.Fragment key={item.title}>
          <StatItem
            title={item.title}
            progress={{
              completed: item.progress?.completed,
              total: item.progress?.total,
            }}
            value={item?.value}
          />
        </React.Fragment>
      ))}
    </section>
  );
}
