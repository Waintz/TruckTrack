import { useEffect, useState } from "react";

export type IntlDateOptions = Intl.DateTimeFormatOptions;

type useFormattedDateProps = {
  locale?: string;
  formattedOptions?: IntlDateOptions;
  order?: Array<"month" | "day" | "weekday" | "hour" | "minute" | "second" | "literal">;
};

export function useFormattedDate({
  formattedOptions,
  locale,
  order,
}: useFormattedDateProps) {
  const [dateTime, setDateTime] = useState(new Date());
  

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatter = new Intl.DateTimeFormat(locale, formattedOptions);
  const parts = formatter.formatToParts(dateTime);

  const partsMap = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  );

  const formattedDate = order
    ?.map((type) => partsMap[type])
    .filter(Boolean)
    .join(" ");

  return { formattedDate };
}
