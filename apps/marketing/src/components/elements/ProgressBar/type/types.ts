import { StrokeColor } from "@/types/progress";

export type ProgressBarMode = "line" | "semicircle" | "truck" | "star";
export type ProgressBarLocation =
  | "top down"
  | "bottom up"
  | "left right"
  | "right left";

export interface CommonProgressBarTypes {
  strokeColor: StrokeColor;
  dailyProgress: number;
}

export interface LineTypes extends CommonProgressBarTypes {
  text?: boolean;
  textPlace?: "before" | "after";
  width?: string;
  height?: string;
  place?: ProgressBarLocation;
}

export interface TruckTypes extends CommonProgressBarTypes {
  width?: number;
  height?: number;
}
