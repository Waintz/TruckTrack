import clsx from "clsx";

interface IArrivalTableCellProps {
  children: React.ReactNode;
  className?: string;
}

export function ArrivalTableCell({
  children,
  className,
}: IArrivalTableCellProps) {
  return (
    <div
      className={clsx(
        "p-3 whitespace-nowrap overflow-hidden text-ellipsis",
        className
      )}
    >
      {children}
    </div>
  );
}
