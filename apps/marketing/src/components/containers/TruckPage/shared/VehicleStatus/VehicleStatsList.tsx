import { TechnicalInformationTruck } from "@/types/truck";
import clsx from "clsx";
import { VehicleGaugeStat } from "./VehicleGaugeStat";

interface IVehicleStatsListProps {
  techical?: TechnicalInformationTruck;
  className?: string;
}

export function VehicleStatsList({
  className,
  techical,
}: IVehicleStatsListProps) {
  if (!techical) return null;

  return (
    <section
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6",
        className
      )}
    >
      {Object.entries(techical).map(([name, data], index) =>
        data ? (
          <VehicleGaugeStat
            note={data.note}
            key={index}
            title={name}
            unit={data.unit}
            value={data.value}
          />
        ) : null
      )}
    </section>
  );
}
