import clsx from "clsx";

interface Props {
  label: string;
  value: string | number | React.ReactElement;
  labelClassName?: string;
  valueClassName?: string;
}

export function ArrivalInfoRow({
  label,
  value,
  labelClassName,
  valueClassName,
}: Props) {
  return (
    <>
      <div className="flex justify-between">
        <span className={clsx("font-medium", labelClassName)}>{label}</span>
        <span className={clsx("text-gray-600", valueClassName)}>{value}</span>
      </div>
    </>
  );
}
