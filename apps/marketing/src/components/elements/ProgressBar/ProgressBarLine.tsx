import { LineTypes } from "./type/types";

export function ProgressBarLine({
  text = false,
  textPlace = "after",
  width,
  height,
  place = "bottom up",
  dailyProgress,
  strokeColor,
}: LineTypes) {
  const isVertical = place === "bottom up" || place === "top down";
  const isReverse = place === "bottom up" || place === "right left";

  return (
    <div
      className={`flex items-center gap-2 ${
        isVertical ? "flex-col" : "flex-row"
      }`}
    >
      {text && textPlace === "before" && <span>{dailyProgress}%</span>}

      <div
        className={`bg-gray-300 rounded overflow-hidden ${
          isVertical ? "w-1 h-50" : "h-1 w-30 sm:w-50 lg:w-100 xl:w-50"
        } ${isReverse ? (isVertical ? "rotate-180" : "flex-row-reverse") : ""}`}
        style={{
          display: "flex",
          ...(width && !isVertical ? { width } : {}),
          ...(height && !isVertical ? { height } : {}),
          ...(isVertical && width ? { width } : {}),
          ...(isVertical && height ? { height } : {}),
        }}
      >
        <div
          className={`transition-all duration-1000 ease-out ${
            isVertical ? "w-full" : "h-full"
          }`}
          style={{
            [isVertical ? "height" : "width"]: `${dailyProgress}%`,
            backgroundColor: strokeColor,
          }}
        />
      </div>

      {text && textPlace === "after" && <span>{dailyProgress}%</span>}
    </div>
  );
}
