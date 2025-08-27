import clsx from "clsx";

interface Props {
  text: string;
  delay: number;
  className?: string;
}

export function DelayBadge({ text, className, delay }: Props) {
  return (
    <span
      style={
        delay <= 3
          ? {
              color: "rgba(245, 158, 11, 1)",
              backgroundColor: "rgba(254, 243, 199, 0.7)",
            }
          : {
              color: "rgba(239, 68, 68, 1)",
              backgroundColor: "rgba(248, 113, 113, 0.2)",
            }
      }
      className={clsx(
        "inline-block font-semibold rounded px-2 py-1 text-sm text-red-500 bg-red-400/20",
        className
      )}
    >
      {text}
    </span>
  );
}
