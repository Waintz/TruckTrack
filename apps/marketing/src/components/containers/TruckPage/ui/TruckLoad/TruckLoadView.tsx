import { Surface } from "@/components/shared/Surface";
import clsx from "clsx";
import { TruckLoadHeader } from "./TruckLoadHeader";
import { TruckDownloadStatus } from "./ui/TruckDownloadStatus";
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
        <TruckDownloadStatus loadPercentage={50} />
        <TierGrid />
      </div>
      <ButtonsControlTruck
        className="flex gap-8"
        renderButton={
          <>
            <ButtonControlTruck
              text="View parcels list"
              iconBefore={<Package />}
            />
            <ButtonControlTruck text="Finish loading" iconBefore={<Truck />} />
          </>
        }
        renderSelectButton={
          <>
            <ButtonControlTruck text="Выбор действия" iconBefore={<Menu />} />
          </>
        }
      />
    </Surface>
  );
}
