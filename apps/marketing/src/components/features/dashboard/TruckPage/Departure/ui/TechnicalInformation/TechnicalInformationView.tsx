import { Surface } from "@/components/shared/Surface";
import clsx from "clsx";
import { TechnicalInformationHeader } from "./ui/TechnicalInformationHeader";
import { TruckDownloadStatus } from "../../../shared/TruckDownloadStatus";
import { VehicleStatusPanel } from "../../../shared/VehicleStatus/VehicleStatusPanel";

export function TechnicalInformationView({ className }: { className: string }) {
  return (
    <Surface
      className={clsx(
        "w-full flex flex-col py-7 px-6 sm:p-10 gap-8",
        className
      )}
    >
      <TechnicalInformationHeader />
      <TruckDownloadStatus loadPercentage={75} />

      <article>
        <VehicleStatusPanel />
      </article>
    </Surface>
  );
}
