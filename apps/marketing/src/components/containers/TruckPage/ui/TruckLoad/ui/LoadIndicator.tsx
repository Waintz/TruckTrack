import { calculatePercentage } from "@/utils/calculatePercentage";
import { getStrokeColor } from "@/utils/getStrokeColor";

interface Props {
  workload: number;
  maximumСapacity: number;
}

export function LoadIndicator({ workload = 0, maximumСapacity = 100 }: Props) {
  const loadPercentage = calculatePercentage({
    total: maximumСapacity,
    usage: workload,
  });

  const strokeColor = getStrokeColor({
    percent: loadPercentage,
    fillingMode: "normal",
    mode: "cell",
  });

  return (
    <div
      className="w-full h-15 sm:h-20 md:h-25 rounded-lg"
      style={{
        background: strokeColor,
        opacity: "70%"
      }}
    ></div>
  );
}
