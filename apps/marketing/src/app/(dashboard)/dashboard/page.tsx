import { DashboardOverview } from "@/components/containers/DashboardOverview/DashboardOverview";
import { TrackingFilters } from "@/components/containers/TrackingFilters/TrackingFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
  description: "",
};

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 p-5">
        <TrackingFilters />
        <DashboardOverview />
      </main>
    </div>
  );
}
