import { IDailyMetric } from "@/types/truck";

interface Props {
  DailyMetric: IDailyMetric[];
}

export function DailyPlanStats({ DailyMetric }: Props) {
  return (
    <section className="flex flex-col gap-5">
      {DailyMetric.map((el) => {
        return (
          <div key={el.name} className="flex flex-col gap-1">
            <p className="opacity-60">{el.name}</p>
            <div className="text-lg">
              <span className="font-semibold">{el.completed}</span>
              <span className="opacity-50 ">/{el.total}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
