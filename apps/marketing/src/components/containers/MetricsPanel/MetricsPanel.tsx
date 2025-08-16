import { MetricCard } from "@/components/ui/cards/MetricCard";
import clsx from "clsx";

export function MetricsPanel({ className }: { className?: string }) {
  return (
    <section
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        className
      )}
    >
      <MetricCard
        alt="finger"
        height={30}
        width={30}
        name="New packages"
        quantity="222"
        src="/icons/two-finger.svg"
      />
      <MetricCard
        alt="box"
        height={30}
        width={30}
        name="Ready for shipping"
        quantity="60"
        src="/icons/box.svg"
      />
      <MetricCard
        alt="truck"
        height={30}
        width={30}
        name="In transition"
        quantity="2000"
        src="/icons/mini-truck.svg"
      />
      <MetricCard
        alt="rocket"
        height={30}
        width={30}
        name="Delivered"
        quantity="3600"
        src="/icons/rocket.svg"
      />
    </section>
  );
}
