import { IconButton } from "@/components/elements/buttons/IconButton";
import { TableList } from "@/components/shared/TableList";
import { IRecentRequests } from "@/types/truck";

interface Props {
  recentRequest: IRecentRequests[];
  limit?: number;
}

export function RecentRequestsTable({ recentRequest, limit }: Props) {
  const effectiveLimit = limit ?? recentRequest.length;

  return (
    <TableList
      itemsData={recentRequest}
      renderRow={(row, index) => {
        return (
          <div
            key={row.id}
            style={
              index < effectiveLimit - 1
                ? { borderBottom: "1px solid #e5e7eb" }
                : {}
            }
            className="p-3 font-bold"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <IconButton className="hidden sm:block" icon="/icons/box.svg" />
                <div>
                  <div className="flex justify-between">
                    <p>{row.type}</p>
                  </div>
                  <div>
                    <span className="hidden sm:inline opacity-40">
                      Destination{" "}
                    </span>
                    <span className="opacity-50">{row.destination}</span>
                    <div className="opacity-40 sm:hidden text-sm mt-1 ">
                      {row.timeAgo} min ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-40 hidden sm:block sm:text-sm">
                {row.timeAgo} min ago
              </div>
              <IconButton className="block sm:hidden" icon="/icons/box.svg" />
            </div>
          </div>
        );
      }}
    />
  );
}
