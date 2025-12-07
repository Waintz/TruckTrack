import clsx from "clsx";
import { ProgressBarLine } from "./ProgressBarLine";
import { getStrokeColor } from "@/utils/getStrokeColor";
import { ProgressBarTruck } from "./ProgressBarTruck";
import { ProgressBarStar } from "./ProgressBarStar";
import { ProgressBarSemicircle } from "./ProgressBarSemicircle";
import {
  ProgressBarLocation,
  ProgressBarMode,
} from "./type/types";
import { FillingMode, StrokeColor } from "@/types/progress";

interface ProgessBarProps {
  progressBarMode: ProgressBarMode;
  dailyProgress?: number;
  fillingMode?: FillingMode;
  customColor?: StrokeColor;
  className?: string;
  lineDimensions?: {
    width?: string;
    height?: string;
  };
  rating?: number;
  maxStar?: number;
  text?: boolean;
  textPlace?: "before" | "after";
  mode?: "cell" | "normal";
  place?: ProgressBarLocation;
}

export function ProgressBar({
  dailyProgress = 100,
  progressBarMode = "line",
  place = "bottom up",
  customColor,
  textPlace = "before",
  lineDimensions,
  fillingMode = "normal",
  text = false,
  mode = "normal",
  className,
  maxStar,
  rating,
}: ProgessBarProps) {
  const strokeColor: StrokeColor = customColor
    ? customColor
    : getStrokeColor({
        percent: dailyProgress,
        fillingMode,
        mode: mode,
      });

  return (
    <div className={clsx("relative", className)}>
      {progressBarMode === "semicircle" && (
        <ProgressBarSemicircle
          dailyProgress={dailyProgress}
          strokeColor={strokeColor}
        />
      )}

      {progressBarMode === "line" && (
        <ProgressBarLine
          height={lineDimensions?.height}
          width={lineDimensions?.width}
          dailyProgress={dailyProgress}
          strokeColor={strokeColor}
          text={text}
          place={place}
          textPlace={textPlace}
        />
      )}

      {progressBarMode === "truck" && (
        <ProgressBarTruck
          strokeColor={strokeColor}
          dailyProgress={dailyProgress}
        />
      )}

      {progressBarMode === "star" && (
        <ProgressBarStar rating={rating || 5} maxStar={maxStar} />
      )}
    </div>
  );
}
