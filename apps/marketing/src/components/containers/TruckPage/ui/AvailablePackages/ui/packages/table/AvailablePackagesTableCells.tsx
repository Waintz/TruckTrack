import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { AvailablePackagesTableCell } from "./AvailablePackagesTableCell";

interface IAvailablePackagesTableCells {
  row: {
    id: number;
    parcelNumber: string;
    valueWeight: number;
    admissionDate: string;
  };
}

export function AvailablePackagesTableCells({
  row,
}: IAvailablePackagesTableCells) {
  const formattedDate = formatIsoToDateTime({
    time: row.admissionDate,
    options: {
      day: true,
      hours: true,
      minutes: true,
      month: true,
    },
  });

  return (
    <>
      <AvailablePackagesTableCell className="flex gap-2 items-center">
        {row.parcelNumber}
      </AvailablePackagesTableCell>
      <AvailablePackagesTableCell>{row.valueWeight}</AvailablePackagesTableCell>
      <AvailablePackagesTableCell>{formattedDate}</AvailablePackagesTableCell>
    </>
  );
}
