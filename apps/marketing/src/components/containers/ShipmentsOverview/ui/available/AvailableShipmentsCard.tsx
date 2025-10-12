"use client";

import { Surface } from "@/components/shared/Surface";
import { AvailableCardHeader } from "./AvailableCardHeader";
import { AvailableCardMainInformation } from "./AvailableCardMainInformation";
import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { ShipmentsInformationCardType } from "@/types/truck";
import { useRouter } from "next/navigation";
import { PAGES_CONFIG } from "@/config/pages.config";

export function AvailableShipmentsCard({
  ShipmentsInformation: {
    arrive,
    destination,
    totalWeight,
    shipmentNumber,
    truckId,
    usedWeight,
  },
}: {
  ShipmentsInformation: ShipmentsInformationCardType;
}) {
  const percent = calculatePercentage({
    total: totalWeight,
    usage: usedWeight,
  });

  const router = useRouter();

  return (
    <Surface
      as={"section"}
      onClick={() =>
        router.push(
          PAGES_CONFIG.SHIPMENTS.children.AVAILABLE.children.TRUCK.path(truckId)
        )
      }
      className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer "
    >
      <AvailableCardHeader
        loadPercentage={percent}
        arrive={arrive}
        destination={destination}
      />
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
