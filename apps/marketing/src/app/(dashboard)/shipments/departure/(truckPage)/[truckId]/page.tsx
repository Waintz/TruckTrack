import { TruckDeparturePage } from "@/components/containers/TruckPage/departure/TruckDeparturePage";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";

export default function Page() {
  return <>
    <Breadcrumbs />
    <TruckDeparturePage className="p-2" />
  </>;
}
