import { TruckDeparturePage } from "@/components/features/dashboard/TruckPage/Departure/TruckDeparturePage";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";

export default function Page() {
  return <>
    <Breadcrumbs />
    <TruckDeparturePage className="p-2" />
  </>;
}
