"use client";

import { Surface } from "@/components/shared/Surface";
import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { ShipmentsInformationCardType } from "@/types/truck";
import { AvailableCardMainInformation } from "@/components/features/dashboard/ShipmentsOverview/ui/Available/AvailableCardMainInformation";

export function TruckDetailsCard({
  totalWeight,
  shipmentNumber,
  truckId,
  usedWeight,
  renderHeader,
  onClick,
}: ShipmentsInformationCardType & {
  renderHeader: React.ReactNode;
  onClick?: (truckId: string) => void;
}) {
  const percent = calculatePercentage({
    total: totalWeight,
    usage: usedWeight,
  });

  return (
    <Surface
      as={"section"}
      onClick={() => onClick?.(truckId)}
      className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer "
    >
      {renderHeader}
      <section className="mt-5 flex justify-between">
        <AvailableCardMainInformation
          shipmentNumber={shipmentNumber}
          totalWeight={totalWeight}
          truckId={truckId}
          usedWeight={usedWeight}
        />
        <ProgressBar
          className="sm:hidden"
          progressBarMode="line"
          dailyProgress={percent}
        />
        <ProgressBar
          className="hidden sm:block"
          progressBarMode="truck"
          dailyProgress={percent}
        />
      </section>
    </Surface>
  );
}
