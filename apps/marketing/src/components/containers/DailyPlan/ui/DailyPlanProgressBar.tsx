import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";

interface Props {
  dailyProgress: number;
}

export function DailyPlanProgressBar({ dailyProgress }: Props) {
  return (
    <section>
      <ProgressBar
        className="sm:hidden"
        place="bottom up"
        text={true}
        textPlace="after"
        progressBarMode="line"
        dailyProgress={dailyProgress}
        fillingMode="normal"
      />
      <ProgressBar
        className="hidden sm:block"
        place="bottom up"
        progressBarMode="semicircle"
        dailyProgress={dailyProgress}
        fillingMode="normal"
      />
    </section>
  );
}
