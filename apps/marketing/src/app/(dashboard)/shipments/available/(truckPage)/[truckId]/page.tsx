import { TruckAvailablePage } from "@/components/containers/TruckPage/available/TruckAvailablePage";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        excludes={[""]}
      />
      <TruckAvailablePage className="p-2" />
    </>
  );
}
