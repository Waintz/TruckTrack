import clsx from "clsx";

interface IAvailablePackagesTableCell {
  children: React.ReactNode | string;
  className?: string;
}

export function AvailablePackagesTableCell({
  children,
  className,
}: IAvailablePackagesTableCell) {
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
