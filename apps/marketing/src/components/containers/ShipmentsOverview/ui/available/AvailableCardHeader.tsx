import { ITruckDelivery } from "@/types/truck";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { getStrokeColor } from "@/utils/getStrokeColor";

type AvailableHeader = Pick<ITruckDelivery, "arrive" | "destination"> & {
  loadPercentage: number;
};

export function AvailableCardHeader({
  destination,
  arrive,
  loadPercentage,
}: AvailableHeader) {
  const formattedDate = formatIsoToDateTime({
    time: arrive,
    options: {
      month: true,
      day: true,
      hours: true,
      minutes: true,
    },
  });
  const strokeColor = getStrokeColor({
    percent: loadPercentage,
    fillingMode: "normal",
    mode: "normal",
  });

  return (
    <header className="flex justify-between items-center">
      <div className="xsm:flex items-center gap-5">
        <h1 className="font-bold text-lg">{destination}</h1>
        <span className="opacity-50 text-sm">{formattedDate}</span>
      </div>
      <div>
        <span
          style={{
            color: strokeColor,
          }}
          className="font-bold"
        >
          {loadPercentage.toFixed(1)}%
        </span>
      </div>
    </header>
  );
}
