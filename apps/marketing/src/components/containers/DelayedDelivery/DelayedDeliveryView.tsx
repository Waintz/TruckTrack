import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";
import { DelayedDeliveryTable } from "./ui/DelayedDeliveryTable/DelayedDeliveryTable";
import { DelayedDeliveryCards } from "./ui/cards/DelayedDeliveryCards";
import { DelayedDeliveryModal } from "./ui/DelayedDeliveryModal/DelayedDeliveryModal";
import { ITruckDelivery } from "@/types/truck";
import { Surface } from "@/components/ui/Surface/Surface";
import { DelayedDeliveryHeader } from "./ui/DelayedDeliveryHeader";

type viewMode = "table" | "card" | null;

interface Props {
  className?: string;
  setViewMode: (mode: viewMode) => void;
  viewMode: viewMode;
  setSelectedRow: (truckInformation: ITruckDelivery) => void;
  data: ITruckDelivery[];
}

export function DelayedDeliveryView({
  className,
  setSelectedRow,
  setViewMode,
  viewMode,
  data,
}: Props) {
  const handleCardClick = (row: ITruckDelivery) => {
    setSelectedRow(row);
    setViewMode("card");
  };

  return (
    <Surface className={className}>
      <DelayedDeliveryHeader setViewMode={setViewMode} />

      <DelayedDeliveryTable limit={3} delayedDeliveryTrucks={data} />

      <div className="md:hidden">
        <DelayedDeliveryCards
          delayedDeliveryTrucks={data.slice(0, 3)}
          onCardClick={handleCardClick}
        />
        <div className="text-center mt-4">
          <PaginationText text="Show all >" onClick={() => {}} />
        </div>
      </div>

      {viewMode && (
        <DelayedDeliveryModal
          viewMode={viewMode}
          onClose={() => setViewMode(null)}
        />
      )}
    </Surface>
  );
}
