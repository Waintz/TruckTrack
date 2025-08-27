import { Surface } from "@/components/ui/Surface/Surface";
import { DailyPlanHeader } from "./ui/DailyPlanHeader";
import { DailyPlanStats } from "./ui/DailyPlanStats";
import { IDailyMetric } from "@/types/truck";
import { DailyPlanProgressBar } from "./ui/DailyPlanProgressBar";

interface Props {
  className?: string;
  DailyMetric: IDailyMetric[];
  dailyProgress: number;
}

// Progess потом сделать лучше

export function DailyPlanView({ className, DailyMetric, dailyProgress }: Props) {
  return (
    <Surface className={className}>
      <DailyPlanHeader />

      <section className="mt-5 flex items-center justify-between">
        <DailyPlanStats DailyMetric={DailyMetric} />
        <DailyPlanProgressBar dailyProgress={dailyProgress} />
      </section>
    </Surface>
  );
}
