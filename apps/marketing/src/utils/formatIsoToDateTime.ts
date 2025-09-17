interface IFormatIsoToDateTime {
  time: string;
  options?: {
    month?: boolean;
    day?: boolean;
    hours?: boolean;
    minutes?: boolean;
  };
}

export function formatIsoToDateTime({
  time,
  options = { hours: true, minutes: true },
}: IFormatIsoToDateTime) {
  const date = new Date(time);
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);

  return `
    ${options?.day ? day.toString().padStart(2, "0") : ""}
    ${options?.month ? month : ""}${
    options.month && (options.day || options.minutes) && options.hours
      ? ","
      : ""
  }
    ${options?.hours ? hours.toString().padStart(2, "0") : ""}${
    options?.hours && options?.minutes ? ":" : ""
  }${options?.minutes ? minutes.toString().padStart(2, "0") : ""} ${
    hours ? "AM" : ""
  }
  `;
}
