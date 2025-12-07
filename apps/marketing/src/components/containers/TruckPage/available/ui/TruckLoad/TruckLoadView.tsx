import { Surface } from "@/components/shared/Surface";
import clsx from "clsx";
import { TruckLoadHeader } from "./TruckLoadHeader";
import { TruckDownloadStatus } from "../../../shared/TruckDownloadStatus";
import { TierGrid } from "./TierGrid/TierGrid";
import { ButtonsControlTruck } from "./ui/ButtonsControlTruck";
import { Menu, Package, Truck } from "lucide-react";
import { ButtonControlTruck } from "./ui/ButtonControlTruck";

interface Props {
  className?: string;
}

export function TruckLoadView({ className }: Props) {
  return (
    <Surface
      className={clsx("w-full p-7 sm:p-10 flex flex-col gap-15", className)}
    >
      <div className="flex flex-col gap-6 xsm:gap-0">
        <TruckLoadHeader loadPercentage={50} />
        <TruckDownloadStatus className="mt-10" loadPercentage={50} />
        <TierGrid />
      </div>
      <ButtonsControlTruck
        className="flex gap-8 z-2"
        renderButton={
          <>
            <ButtonControlTruck iconBefore={<Package />}>
              View parcels list
            </ButtonControlTruck>
            <ButtonControlTruck iconBefore={<Truck />}>
              Finish loading
            </ButtonControlTruck>
          </>
        }
        renderSelectButton={
          <>
            <ButtonControlTruck iconBefore={<Menu />}>
              Выбор действия
            </ButtonControlTruck>
          </>
        }
      />
    </Surface>
  );
}
