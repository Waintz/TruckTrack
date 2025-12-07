import { IconCircle } from "../buttons/IconCircle";
import { CommonProgressBarTypes } from "./type/types";

export function ProgressBarSemicircle({
  strokeColor,
  dailyProgress,
}: CommonProgressBarTypes) {
  const strokeWidth = 8;
  const size = 50;

  const circumference = Math.PI * size;
  const svgSize = 2 * (size + strokeWidth);
  return (
    <>
      <svg
        viewBox={`0 0 ${svgSize} ${size + strokeWidth}`}
        className="w-full h-auto"
      >
        <path
          d={`M${strokeWidth},${size + strokeWidth} A${size},${size} 0 0,1 ${
            2 * size + strokeWidth
          },${size + strokeWidth}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        <path
          d={`M${strokeWidth},${size + strokeWidth} A${size},${size} 0 0,1 ${
            2 * size + strokeWidth
          },${size + strokeWidth}`}
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
        <div className="font-semibold text-2xl" style={{ color: strokeColor }}>
          {dailyProgress}%
        </div>
      </div>
      <div className="flex opacity-60 justify-between mt-3">
        <div className="ml-2">0%</div>
        <div>100%</div>
      </div>
    </>
  );
}
