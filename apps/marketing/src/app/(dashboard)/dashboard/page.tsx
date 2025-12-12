import { DashboardOverview } from "@/components/features/dashboard/DashboardOverview/DashboardOverview";
import { BaseFilters } from "@/components/features/dashboard/FiltersBar/presets/BaseFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
  description: "",
};

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 p-5">
        <BaseFilters />
        <DashboardOverview />
      </main>
    </div>
  );
}
