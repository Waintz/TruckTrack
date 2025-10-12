import clsx from "clsx";
import { IconCircle } from "../buttons/IconCircle";
import { ProgressBarLine } from "./ProgressBarLine";
import {
  FillingMode,
  ProgressBarLocation,
  ProgressBarMode,
  StrokeColor,
} from "@/types/progress";
import { getStrokeColor } from "@/utils/getStrokeColor";
import { ProgressBarTruck } from "./ProgressBarTruck";

interface ProgessBarProps {
  dailyProgress?: number;
  fillingMode?: FillingMode;
  progressBarMode: ProgressBarMode;
  className?: string;
  text?: boolean;
  textPlace?: "before" | "after";
  mode?: "cell" | "normal";
  place?: ProgressBarLocation;
}

export function ProgressBar({
  dailyProgress = 100,
  progressBarMode = "line",
  place = "bottom up",
  textPlace = "before",
  fillingMode = "normal",
  text = false,
  mode = "normal",
  className,
}: ProgessBarProps) {
  const strokeWidth = 8;
  const size = 50;

  const strokeColor: StrokeColor = getStrokeColor({
    percent: dailyProgress,
    fillingMode,
    mode: mode,
  });

  const circumference = Math.PI * size;
  const svgSize = 2 * (size + strokeWidth);

  return (
    <div className={clsx("relative", className)}>
      {progressBarMode === "semicircle" && (
        <>
          <svg
            viewBox={`0 0 ${svgSize} ${size + strokeWidth}`}
            className="w-full h-auto"
          >
            <path
              d={`M${strokeWidth},${
                size + strokeWidth
              } A${size},${size} 0 0,1 ${2 * size + strokeWidth},${
                size + strokeWidth
              }`}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
            />
            <path
              d={`M${strokeWidth},${
                size + strokeWidth
              } A${size},${size} 0 0,1 ${2 * size + strokeWidth},${
                size + strokeWidth
              }`}
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={`${
                circumference * (dailyProgress / 100)
              } ${circumference}`}
              style={{ transition: "stroke-dasharray 1s ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <IconCircle icon="/icons/like.svg" nameIcon="truck" size={30} />
          </div>
          <div className="absolute inset-0 flex mb-1 flex-col items-center justify-end pointer-events-none">
            <div
              className="font-semibold text-2xl"
              style={{ color: strokeColor }}
            >
              {dailyProgress}%
            </div>
          </div>
          <div className="flex opacity-60 justify-between mt-3">
            <div className="ml-2">0%</div>
            <div>100%</div>
          </div>
        </>
      )}

      {progressBarMode === "line" && (
        <ProgressBarLine
          dailyProgress={dailyProgress}
          strokeColor={strokeColor}
          text={text}
          place={place}
          textPlace={textPlace}
        />
      )}

      {progressBarMode === "truck" && (
        <ProgressBarTruck dailyProgress={dailyProgress} />
      )}
    </div>
  );
}
