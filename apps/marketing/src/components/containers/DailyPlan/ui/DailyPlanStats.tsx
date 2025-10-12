import { StatItem } from "@/components/ui/StatItem";
import { IDailyMetric } from "@/types/truck";
import React from "react";

interface Props {
  DailyMetric: IDailyMetric[];
}

export function DailyPlanStats({ DailyMetric }: Props) {
  return (
    <section className="flex flex-col gap-6">
      {DailyMetric.map((el) => {
        return (
          <React.Fragment key={el.name}>
            <StatItem
              name={el.name}
              progress={{ completed: el.completed, total: el.total }}
            />
          </React.Fragment>
        );
      })}
    </section>
  );
}
