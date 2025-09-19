import { Surface } from "@/components/shared/Surface";
import { AvailableTrucksHeader } from "./ui/AvailableTrucksHeader";
import { AvailableTrucksTable } from "./ui/AvailableTrucksTable";
import { ITruckLoad } from "@/types/truck";
import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";

interface Props {
  truckLoad: ITruckLoad[];
}

export function AvailableTrucksView({ truckLoad }: Props) {
  return (
    <Surface className="p-5 md:px-10 md:py-6">
      <AvailableTrucksHeader />

      <section className="mt-3">
        <AvailableTrucksTable truckLoad={truckLoad.slice(0, 3)} limit={3} />
      </section>

      <div className="flex justify-center mt-5 sm:hidden">
        <PaginationText onClick={() => {}} text="Show all >" />
      </div>
    </Surface>
  );
}
