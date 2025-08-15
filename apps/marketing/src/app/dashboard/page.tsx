import { ShippingDashboard } from "@/components/containers/ShippingDashboard/ShippingDashboard";
import { TrackingFilters } from "@/components/containers/TrackingFilters/TrackingFilters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for managing your application",
};

export default function Page() {
  return (
    <>
      <main className="container mx-auto p-5 mt-5">
        <TrackingFilters />
      </main>
      <main className="container mx-auto p-4 mt-4">
        <ShippingDashboard  />
      </main>
    </>
  );
}
