import { useEffect, useState } from "react";

export type IntlDateOptions = Intl.DateTimeFormatOptions;

export function useFormattedDate(
  locale?: string,
  formattedOptions?: IntlDateOptions
) {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleString(locale, formattedOptions);

  return { formattedDate };
}
