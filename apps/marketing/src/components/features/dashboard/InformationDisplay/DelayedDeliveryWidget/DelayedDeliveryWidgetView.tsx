import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";
import { DelayedDeliveryTable } from "./ui/DelayedDeliveryTable/DelayedDeliveryTable";
import { DelayedDeliveryCards } from "./ui/cards/DelayedDeliveryCards";
import { ITruckDelivery } from "@/types/truck";
import { Surface } from "@/components/shared/Surface";
import { DelayedDeliveryHeader } from "./ui/DelayedDeliveryHeader";
import { DelayedDeliveryDrawerModal } from "./ui/DelayedDeliveryDrawerModal/DelayedDeliveryDrawerModal";
import clsx from "clsx";

interface Props {
  className?: string;
  setSelectedRow: (truckInformation: ITruckDelivery | null) => void;
  selectedRow?: ITruckDelivery | null;
  data: ITruckDelivery[];
}

export function DelayedDeliveryView({
  className,
  setSelectedRow,
  selectedRow,
  data,
}: Props) {
  const handleRowClick = (row: ITruckDelivery) => {
    setSelectedRow(row);
  };

  return (
    <Surface className={clsx(className, "p-5 md:px-10 md:py-6")}>
      <DelayedDeliveryHeader />

      <DelayedDeliveryTable
        limit={3}
        onRowClick={handleRowClick}
        delayedDeliveryTrucks={data}
      />

      <div className="md:hidden">
        <DelayedDeliveryCards
          delayedDeliveryTrucks={data.slice(0, 3)}
          // onRowClick={handleRowClick}
        />
        <div className="text-center mt-4">
          <PaginationText text="Show all >" onClick={() => {}} />
        </div>
      </div>

      {selectedRow && (
        <DelayedDeliveryDrawerModal
          truckId={selectedRow.id}
          onClick={() => setSelectedRow(null)}
        />
      )}
    </Surface>
  );
}
