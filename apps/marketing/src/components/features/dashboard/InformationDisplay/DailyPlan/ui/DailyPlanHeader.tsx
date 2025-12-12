import { useFormattedDate } from "@/hooks/useFormattedDate";
import { Ellipsis } from "lucide-react";

export function DailyPlanHeader() {
  const { formattedDate } = useFormattedDate({
    locale: "en-GB",
    formattedOptions: { weekday: "short", month: "short", day: "numeric" },
    order: ["weekday", "day", "month"],
  });

  return (
    <header className="flex justify-between">
      <div className="flex md:flex-row md:gap-3 flex-col">
        <h1 className="flex text-xl font-bold ">Daily plan</h1>
        <span className="flex items-end opacity-60">{formattedDate}</span>
      </div>
      <Ellipsis />
    </header>
  );
}
