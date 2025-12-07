import { useFormattedDate } from "@/hooks/useFormattedDate";

export function DateView() {
  const { formattedDate } = useFormattedDate({
    locale: "en-GB",
    formattedOptions: {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    order: [
      "weekday",
      "day",
      "month",
      "hour",
      "literal",
      "minute",
      "literal",
      "second",
    ],
  });

  return (
    <div className="text-gray-500 text-sm font-medium text-center">
      {formattedDate}
    </div>
  );
}
