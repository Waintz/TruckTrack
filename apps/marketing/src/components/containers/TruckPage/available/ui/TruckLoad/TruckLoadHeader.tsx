import { getStrokeColor } from "@/utils/getStrokeColor";
import { LayoutContainerHeaders } from "../../../layouts/LayoutContainerHeaders";

interface Props {
  loadPercentage?: number;
}

export function TruckLoadHeader({ loadPercentage = 0 }: Props) {
  const loadPercentageColor = getStrokeColor({
    percent: loadPercentage,
    fillingMode: "normal",
    mode: "normal",
  });

  return (
    <LayoutContainerHeaders
      title="Truck load"
      className="flex justify-between items-center font-semibold w-full"
      renderMoreInformations={
        <span className="text-2xl" style={{ color: loadPercentageColor }}>
          {loadPercentage}%
        </span>
      }
    />
  );
}
