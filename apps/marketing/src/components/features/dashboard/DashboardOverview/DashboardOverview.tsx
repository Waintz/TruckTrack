"use client";

import clsx from "clsx";
import { MetricsPanel } from "../InformationDisplay/MetricsPanel/MetricsPanel";
import { DelayedDeliveryContainer } from "../InformationDisplay/DelayedDeliveryWidget/DelayedDeliveryWidgetContainer";
import { DailyPlanContainer } from "../InformationDisplay/DailyPlan/DailyPlanContainer";
import { AvailableTrucksContainer } from "../InformationDisplay/AvailableTrucks/AvailableTrucksContainer";
import { RecentRequestsContainer } from "../InformationDisplay/RecentRequests/RecentRequestsContainer";

export function DashboardOverview({ className }: { className?: string }) {
  return (
    <div className={clsx("p-4", className)}>
      <header>
        <span className="font-bold text-2xl">Overview</span>
      </header>
      <article className="p-1">
        <MetricsPanel className="mt-5" />
        <article className="mt-5 grid xl:grid-cols-2 xl:grid-rows-2 gap-4">
          <DelayedDeliveryContainer />
          <DailyPlanContainer />
          <AvailableTrucksContainer />
          <RecentRequestsContainer />
        </article>
      </article>
    </div>
  );
}
