import { IDailyMetric } from "@/types/truck";
import { DailyPlanView } from "./DailyPlanView";
import { useMemo } from "react";

export function DailyPlanContainer({ className }: { className?: string }) {
  const DailyMetric: IDailyMetric[] = useMemo(
    () => [
      { name: "Shipments processed", completed: 1010, total: 2020 },
      { name: "Orders processed", completed: 650, total: 1300 },
      { name: "Requests considered", completed: 10, total: 20 },
    ],
    []
  );

  return <DailyPlanView dailyProgress={50} DailyMetric={DailyMetric} className={className} />;
}
