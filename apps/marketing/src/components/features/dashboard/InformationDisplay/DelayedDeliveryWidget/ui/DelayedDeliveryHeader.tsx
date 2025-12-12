import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";

export function DelayedDeliveryHeader() {
  return (
    <header className="md:flex items-center justify-between mb-5">
      <h1 className="flex items-center text-xl font-bold ">Delayed delivery</h1>
      <p className="hidden md:block">
        <PaginationText text="Show all >" />
      </p>
    </header>
  );
}
