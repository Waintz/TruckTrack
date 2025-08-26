import { FillingMode, StrokeColor } from "@/types/progress";

export const getStrokeColor = (
  percent: number,
  fillingMode: FillingMode
): StrokeColor => {
  if (fillingMode === "normal") {
    return percent <= 34 ? "#5DC983" : percent <= 74 ? "#F2AF4C" : "#EB5769";
  }
  return percent <= 34 ? "#EB5769" : percent <= 74 ? "#F2AF4C" : "#5DC983";
};
