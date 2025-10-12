import { getStrokeColor } from "@/utils/getStrokeColor";

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
    <header className="flex justify-between items-center font-semibold text-xl">
      <p>Truck load</p>
      <span className="text-2xl" style={{ color: loadPercentageColor }}>{loadPercentage}%</span>
    </header>
  );
}
