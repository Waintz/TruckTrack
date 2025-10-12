import { COLORS } from "@/config/colors.config";
import { FillingMode, StrokeColor } from "@/types/progress";

export const getStrokeColor = ({
  percent,
  fillingMode,
  mode = "normal",
}: {
  percent: number;
  fillingMode: FillingMode;
  mode?: "cell" | "normal";
}): StrokeColor => {
  if (mode === "normal") {
    if (fillingMode === "normal") {
      return percent <= 34
        ? COLORS.green
        : percent <= 74
        ? COLORS.orange
        : COLORS.red;
    }
    return percent <= 34
      ? COLORS.red
      : percent <= 74
      ? COLORS.orange
      : COLORS.green;
  }

  if (mode === "cell") {
    if (fillingMode === "normal") {
      return percent === 0
        ? COLORS.ghostWhite
        : percent <= 34
        ? COLORS.green
        : percent <= 74
        ? COLORS.orange
        : COLORS.purple;
    }

    if (fillingMode === "inverse") {
      return percent === 0
        ? COLORS.ghostWhite
        : percent <= 34
        ? COLORS.purple
        : percent <= 74
        ? COLORS.orange
        : COLORS.green;
    }
  }

  return COLORS.ghostWhite;
};
