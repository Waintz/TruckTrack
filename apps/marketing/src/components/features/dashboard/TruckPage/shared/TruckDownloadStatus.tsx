import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";
import { StatItem } from "@/components/ui/StatItem";
import clsx from "clsx";

interface Props {
  loadPercentage?: number;
  className?: string;
  classNameProgressBar?: string;
  classNameStatItem?: string;
}

export function TruckDownloadStatus({
  loadPercentage = 0,
  className,
  classNameProgressBar,
  classNameStatItem,
}: Props) {
  return (
    <div className={clsx("flex justify-between", className)}>
      <StatItem
        className={clsx("", classNameStatItem)}
        classNameTitle="font-bold text-lg"
        classNameProgress="text-3xl font-semibold "
        title="Available, kg"
        progress={{ completed: 200, total: 400 }}
      />
      <ProgressBar
        progressBarMode="truck"
        className={clsx(
          "w-40 hidden xsm:block md:w-50 lg:w-70",
          classNameProgressBar
        )}
        dailyProgress={loadPercentage}
        fillingMode="normal"
      />
    </div>
  );
}
