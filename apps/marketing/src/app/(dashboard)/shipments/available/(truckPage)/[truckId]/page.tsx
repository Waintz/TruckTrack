import { TruckAvailablePage } from "@/components/features/dashboard/TruckPage/Available/TruckAvailablePage";
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
