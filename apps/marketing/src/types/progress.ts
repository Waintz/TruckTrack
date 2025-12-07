import { COLORS } from "@/config/colors.config";

export type FillingMode = "normal" | "inverse";
export type StrokeColor = typeof COLORS[keyof typeof COLORS];