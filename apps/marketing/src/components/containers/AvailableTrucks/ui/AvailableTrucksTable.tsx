import { ProgessBar } from "@/components/elements/ProgressBar/ProgessBar";
import { TableList } from "@/components/shared/TableList";
import { ITruckLoad } from "@/types/truck";
import { getStrokeColor } from "@/utils/getStrokeColor";

interface Props {
  truckLoad: ITruckLoad[];
  limit?: number;
}

export function AvailableTrucksTable({ truckLoad, limit }: Props) {
  const effectiveLimit = limit ?? truckLoad.length;

  return (
    <TableList
      itemsData={truckLoad}
      renderRow={(row, index) => {
        const strokeColor = getStrokeColor(row.loaded, "normal");
        return (
          <div
            key={row.id}
            className="p-3 sm:p-4.5 text-sm md:text-md font-bold"
            style={
              index < effectiveLimit - 1
                ? { borderBottom: "1px solid #e5e7eb" }
                : {}
            }
          >
            <div>
              <div className="flex justify-between">
                <p>{row.truck}</p>
                <div>
                  <span style={{ color: strokeColor }}>{row.loaded}</span>
                  <span className="hidden sm:inline opacity-50">/100</span>
                  <span className="opacity-50"> %</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 opacity-70">
                <p className="truncate text-sm">{row.destination}</p>
                <ProgessBar
                  place="left right"
                  dailyProgress={row.loaded}
                  progressBarMode="line"
                />
              </div>
            </div>
          </div>
        );
      }}
      columnWidths={["1fr"]}
    />
  );
}
