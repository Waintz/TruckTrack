import { TruckPage } from "@/components/containers/TruckPage/TruckPage";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/Breadcrumbs";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        excludes={[""]}
      />
      <TruckPage className="p-2" />
    </>
  );
}
