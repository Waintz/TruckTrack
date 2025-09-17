"use client";

import clsx from "clsx";
import { MetricsPanel } from "../MetricsPanel/MetricsPanel";
import React from "react";
import { DelayedDeliveryContainer } from "../DelayedDelivery/DelayedDeliveryContainer";
import { DailyPlanContainer } from "../DailyPlan/DailyPlanContainer";
import { AvailableTrucksContainer } from "../AvailableTrucks/AvailableTrucksContainer";
import { RecentRequestsContainer } from "../RecentRequests/RecentRequestsContainer";

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
