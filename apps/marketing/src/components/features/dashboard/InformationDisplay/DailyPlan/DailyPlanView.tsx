import { Surface } from "@/components/shared/Surface";
import { DailyPlanHeader } from "./ui/DailyPlanHeader";
import { DailyPlanStats } from "./ui/DailyPlanStats";
import { IDailyMetric } from "@/types/truck";
import { DailyPlanProgressBar } from "./ui/DailyPlanProgressBar";
import clsx from "clsx";

interface Props {
  className?: string;
  DailyMetric: IDailyMetric[];
  dailyProgress: number;
}

// Progess потом сделать лучше

export function DailyPlanView({
  className,
  DailyMetric,
  dailyProgress,
}: Props) {
  return (
    <Surface className={clsx(className, "p-5 md:px-10 md:py-6")}>
      <DailyPlanHeader />

      <section className="mt-5 flex items-center justify-between">
        <DailyPlanStats DailyMetric={DailyMetric} />
        <DailyPlanProgressBar dailyProgress={dailyProgress} />
      </section>
    </Surface>
  );
}
