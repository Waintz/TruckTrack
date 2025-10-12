import { toggleSelectRow } from "@/components/shared/TableList/helpers/tableSelectionHelper";
import { IParcel } from "@/types/truck";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import clsx from "clsx";
import { useState } from "react";

interface IAvailablePackagesCardProps {
  parcelItem: IParcel;
  selectedIds: number[];
  onSelectChange?: (selected: number[]) => void;
}

export function AvailablePackagesCard({
  onSelectChange,
  selectedIds,
  parcelItem,
}: IAvailablePackagesCardProps) {
  const [isChecked, setIsChecked] = useState(
    selectedIds.includes(parcelItem.id)
  );
  const formattedDate = formatIsoToDateTime({
    time: parcelItem.admissionDate,
    options: { day: true, hours: true, minutes: true, month: true },
  });

  const handleClick = () => {
    toggleSelectRow(parcelItem.id, selectedIds, onSelectChange);
    setIsChecked((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "w-full p-4 rounded-lg",
        isChecked ? "bg-purple shadow-lg shadow-purple" : "bg-ghost-white"
      )}
      onClick={handleClick}
    >
      <div
        className={clsx("w-full", isChecked ? "text-white" : "text-dark-blue")}
      >
        <div className="flex justify-between">
          <p>
            <span className="xs:inline hidden">id:</span>{" "}
            {parcelItem.parcelNumber}
          </p>
          <p>
            <span className="xs:inline hidden">w:</span>{" "}
            {parcelItem.valueWeight}
          </p>
        </div>
        <p>
          <span className="xs:inline hidden">time:</span>{" "}
          <span className="opacity-50 text-sm">{formattedDate}</span>
        </p>
      </div>
    </div>
  );
}
