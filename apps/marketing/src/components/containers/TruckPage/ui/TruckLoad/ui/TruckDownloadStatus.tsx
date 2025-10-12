import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";
import { StatItem } from "@/components/ui/StatItem";

interface Props {
  loadPercentage?: number;
}

export function TruckDownloadStatus({ loadPercentage = 0 }: Props) {
  return (
    <div className="flex justify-between items-center">
      <StatItem
        className="font-bold text-lg"
        classNameProgress="text-3xl font-semibold "
        name="Available, kg"
        progress={{ completed: 200, total: 400 }}
      />
      <ProgressBar
        progressBarMode="truck"
        className="w-40 hidden xsm:block md:w-60 lg:w-70 mt-10"
        dailyProgress={loadPercentage}
        fillingMode="normal"
      />
    </div>
  );
}
