interface IFormatMinutesToHHMMProps {
  time: number;
  separator?: "." | ":" | ",";
}

export function formatMinutesToHHMM({
  time,
  separator = ".",
}: IFormatMinutesToHHMMProps) {
  const hour = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hour.toString().padStart(1, "0")}${separator}${minutes
    .toString()
    .padStart(2, "0")} h`;
}