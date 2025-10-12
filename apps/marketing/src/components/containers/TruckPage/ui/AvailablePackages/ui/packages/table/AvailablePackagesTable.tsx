import React from "react";
import { TableList } from "@/components/shared/TableList/TableList";
import { AvailablePackagesTableCells } from "./AvailablePackagesTableCells";
import { useAppDispatch, useAppSelector } from "@/store/redux/redux";
import { selectSelectedPackages, toggleSelectedPackage } from "../../../model";
import clsx from "clsx";
import { IParcel } from "@/types/truck";
import { handleSelectChangeHelper } from "@/components/shared/TableList/helpers/tableSelectionHelper";

export function AvailablePackagesTable({
  className,
  packages,
}: {
  className?: string;
  packages: IParcel[];
}) {
  const dispatch = useAppDispatch();
  const selectedPackages = useAppSelector(selectSelectedPackages);

  const handleSelectChange = (selectedIds: number[]) => {
    handleSelectChangeHelper(
      packages,
      selectedPackages,
      selectedIds,
      ({ packageId, weight }) =>
        dispatch(toggleSelectedPackage({ packageId, weight }))
    );
  };

  return (
    <TableList
      className={clsx("bg-ghost-white rounded-t-xl", className)}
      itemsData={packages}
      selectable
      selectedIds={selectedPackages}
      onSelectChange={handleSelectChange}
      renderRow={(row) => <AvailablePackagesTableCells row={row} />}
      rowsClassName="bg-white mt-0.5"
      columnWidths={["1fr", "1fr", "1fr"]}
      headerColumns={["Parcel number", "Value weight", "Admission date"]}
      renderColumnHeader={(column) => (
        <div className="p-3 opacity-50">{column}</div>
      )}
    />
  );
}
