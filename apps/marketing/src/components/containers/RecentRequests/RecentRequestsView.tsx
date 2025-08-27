import { Surface } from "@/components/ui/Surface/Surface";
import { RecentRequestHeader } from "./ui/RecentRequestHeader";
import { RecentRequestsTable } from "./ui/RecentRequestsTable";
import { IRecentRequests } from "@/types/truck";
import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";

interface Props {
  recentRequests: IRecentRequests[];
}

export function RecentRequestsView({ recentRequests }: Props) {
  return (
    <Surface>
      <RecentRequestHeader />
      <section className="mt-2">
        <RecentRequestsTable
          recentRequest={recentRequests.slice(0, 3)}
          limit={3}
        />
      </section>

      <div className="flex justify-center mt-5 sm:hidden">
        <PaginationText onClick={() => {}} text="Show all >" />
      </div>
    </Surface>
  );
}
