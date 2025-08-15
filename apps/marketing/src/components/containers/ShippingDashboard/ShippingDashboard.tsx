import clsx from "clsx";
import { MetricsPanel } from "../MetricsPanel/MetricsPanel";

export function ShippingDashboard({className}: {className?: string}) {
  return (
    <div className={clsx("p-4", className)}>
      <header>
        <span className="font-bold text-2xl">Overview</span>
      </header>
      <article className="p-1">
        <MetricsPanel className="mt-5" />
      </article>
    </div>
  );
}
