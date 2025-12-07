
import { calculatePercentage } from "@/utils/calculatePercentage";
import { getStrokeColor } from "@/utils/getStrokeColor";
import clsx from "clsx";

interface Props {
  workload: number;
  maximumСapacity: number;
  cursor?:
    | "cursor-not-allowed"
    | "cursor-pointer"
    | "cursor-default"
    | "cursor-auto";
  className?: string;
  onClick?: () => void;
}

export function LoadIndicator({
  workload = 0,
  maximumСapacity = 100,
  cursor = "cursor-not-allowed",
  onClick,
  className,
}: Props) {
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
      onClick={onClick}
      className={clsx(
        "w-full h-15 sm:h-20 md:h-25 rounded-lg",
        className,
        cursor
      )}
      style={{
        background: strokeColor,
      }}
    ></div>
  );
}
