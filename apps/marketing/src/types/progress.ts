import { COLORS } from "@/config/colors.config";

export type FillingMode = "normal" | "inverse";
export type StrokeColor = typeof COLORS[keyof typeof COLORS];
export type ProgressBarMode = "line" | "semicircle";
export type ProgressBarLocation =
  | "top down"
  | "bottom up"
  | "left right"
  | "right left";
