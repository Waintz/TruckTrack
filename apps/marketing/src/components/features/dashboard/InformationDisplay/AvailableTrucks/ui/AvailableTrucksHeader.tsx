import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";

export function AvailableTrucksHeader() {
  return (
    <header className="flex justify-between">
      <div className="flex md:flex-row md:gap-3 flex-col">
        <h1 className="flex text-xl font-bold ">Available trucks</h1>
      </div>
      <PaginationText
        className="hidden sm:block"
        onClick={() => void 0}
        text="Show all >"
      />
    </header>
  );
}
