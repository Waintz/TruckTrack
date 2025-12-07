interface IFormatIsoToDateTime {
  time: string;
  options?: {
    year?: boolean;
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
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  return `
    ${options?.day ? day.toString().padStart(2, "0") : ""} 
    ${options?.month ? month : ""} 
    ${options?.year ? year : ""}${options?.hours || options?.minutes ? "" : ""}
    ${options?.hours ? hours.toString().padStart(2, "0") : ""}${
    options?.hours && options?.minutes ? ":" : ""
  }${options?.minutes ? minutes.toString().padStart(2, "0") : ""} 
    ${options?.hours ? ampm : ""}
  `.trim().replace(/\s+/g, " ");
}
