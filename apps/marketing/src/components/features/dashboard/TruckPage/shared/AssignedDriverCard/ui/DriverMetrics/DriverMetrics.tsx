import { StatItem } from "@/components/ui/StatItem";

export function DriverMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-center">
      <StatItem
        classNameValue="text-green font-bold"
        title="Status"
        value="On the road"
      />
      <StatItem title="Trips completed" value="127" />
      <StatItem title="Total distance" value="492,800 km" />
      <StatItem title="Connectivity" value="GPS: Active" />
    </div>
  );
}
