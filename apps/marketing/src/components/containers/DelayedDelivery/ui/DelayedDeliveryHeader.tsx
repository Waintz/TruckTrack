import { PaginationText } from "@/components/elements/buttons/pagination/PaginationText";

interface Props {
  setViewMode: (mode: "table" | "card" | null) => void;
}

export function DelayedDeliveryHeader({ setViewMode }: Props) {
  return (
    <header className="md:flex items-center justify-between mb-5">
      <h1 className="flex items-center text-xl font-bold ">Delayed delivery</h1>
      <p className="hidden md:block">
        <PaginationText
          text="Show all >"
          onClick={() => {
            setViewMode("table");
          }}
        />
      </p>
    </header>
  );
}
