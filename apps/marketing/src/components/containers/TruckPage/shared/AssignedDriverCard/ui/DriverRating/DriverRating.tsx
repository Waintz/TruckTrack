import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";
import { StatTile } from "@/components/ui/StatTile";
import { Clock, Route, ShieldCheck } from "lucide-react";

export function DriverRating() {
  return (
    <>
      <StatTile
        title="Punctuality"
        Icon={<Clock size={20} className="text-red" />}
        subtitle={<ProgressBar rating={3.5} progressBarMode="star" />}
      />
      <StatTile
        title="Route Efficiency"
        Icon={<Route size={20} className="text-red" />}
        subtitle={<ProgressBar rating={4.5} progressBarMode="star" />}
      />
      <StatTile
        title="Cargo Safety"
        Icon={<ShieldCheck size={20} className="text-red" />}
        subtitle={<ProgressBar rating={2.5} progressBarMode="star" />}
      />
    </>
  );
}
