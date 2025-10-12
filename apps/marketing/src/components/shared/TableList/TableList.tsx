"use client";

import clsx from "clsx";
import { Checkbox } from "../../ui/checkbox/Checkbox";
import { CheckboxVariat } from "../../ui/checkbox/checkbox.types";
import {
  toggleSelectAllRows,
  toggleSelectRow,
} from "./helpers/tableSelectionHelper";

interface TableListProps<RowType extends { id: number }, HeaderType> {
  itemsData: RowType[];
  rowsClassName?: string;
  onClick?: (row: RowType) => void;
  headerColumns?: HeaderType[];
  renderColumnHeader?: (column: HeaderType, index: number) => React.ReactNode;
  renderRow: (row: RowType, index: number) => React.ReactNode;
  className?: string;
  columnWidths?: string[];
  checkboxVariant?: CheckboxVariat;
  selectable?: boolean;
  selectedIds?: number[];
  onSelectChange?: (selected: number[]) => void;
}

export function TableList<RowType extends { id: number }, HeaderType>({
  itemsData,
  checkboxVariant = "default",
  headerColumns,
  onClick,
  rowsClassName,
  renderRow,
  renderColumnHeader,
  className,
  columnWidths,
  selectable = false,
  onSelectChange,
  selectedIds = [],
}: TableListProps<RowType, HeaderType>) {
  const totalItems = itemsData.length;
  const selectedCount = selectedIds.length;

  const allSelected = totalItems > 0 && selectedCount === totalItems;

  const baseCols = headerColumns?.length ?? 0;
  const totalCols = selectable ? baseCols + 1 : baseCols;

  const gridTemplateColumns =
    totalCols > 0
      ? columnWidths && columnWidths.length === baseCols
        ? (selectable ? ["60px", ...columnWidths] : columnWidths).join(" ")
        : `repeat(${totalCols}, minmax(0, 1fr))`
      : undefined;

  const gridStyle = gridTemplateColumns ? { gridTemplateColumns } : undefined;

  return (
    <div className={clsx("grid", className)}>
      {headerColumns && (
        <div
          className="grid font-bold bg-gray-100 items-center rounded-t-xl"
          style={gridStyle}
        >
          {selectable && (
            <div className="flex justify-center">
              <Checkbox
                onCheckedChange={() =>
                  toggleSelectAllRows(itemsData, allSelected, onSelectChange)
                }
                checked={allSelected}
                variat={checkboxVariant}
              />
            </div>
          )}
          {headerColumns.map((column, idx) => (
            <div key={idx}>
              {renderColumnHeader
                ? renderColumnHeader(column, idx)
                : String(column)}
            </div>
          ))}
        </div>
      )}

      {itemsData.map((row, idx) => {
        const isSelected = selectedIds.includes(row.id);
        return (
          <div
            key={row.id ?? idx}
            className={clsx("grid items-center", rowsClassName)}
            style={gridStyle}
            onClick={() => onClick?.(row)}
          >
            {selectable && (
              <div className="flex justify-center">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() =>
                    toggleSelectRow(row.id, selectedIds, onSelectChange)
                  }
                  variat={checkboxVariant}
                />
              </div>
            )}
            {renderRow(row, idx)}
          </div>
        );
      })}
    </div>
  );
}
