'use client';

import clsx from "clsx";

interface TableListProps<RowType, HeaderType> {
  itemsData: RowType[];
  rowsClassName?: string;
  onClick?: (row: RowType) => void;
  headerColumns?: HeaderType[];
  renderColumnHeader?: (column: HeaderType) => React.ReactNode;
  renderRow: (row: RowType, index: number) => React.ReactNode;
  className?: string;
  columnWidths?: string[];
}

export function TableList<RowType, HeaderType>({
  itemsData,
  headerColumns,
  onClick,
  rowsClassName,
  renderRow,
  renderColumnHeader,
  className,
  columnWidths,
}: TableListProps<RowType, HeaderType>) {
  const gridTemplateColumns = headerColumns
    ? columnWidths && columnWidths.length === headerColumns.length
      ? columnWidths.join(" ")
      : `repeat(${headerColumns.length}, minmax(0, 1fr))`
    : null;

  return (
    <div className={clsx("grid ", className)}>
      {headerColumns && renderColumnHeader && (
        <div
          className="grid font-bold bg-gray-100 rounded-t-lg"
          style={gridTemplateColumns ? { gridTemplateColumns } : undefined}
        >
          {headerColumns.map((column, idx) => (
            <div key={idx}>{renderColumnHeader(column)}</div>
          ))}
        </div>
      )}

      {itemsData.map((row, idx) => (
        <div
          onClick={() => onClick?.(row)}
          key={idx}
          className={clsx("grid items-center", rowsClassName)}
          style={gridTemplateColumns ? { gridTemplateColumns } : undefined}
        >
          {renderRow(row, idx)}
        </div>
      ))}
    </div>
  );
}
