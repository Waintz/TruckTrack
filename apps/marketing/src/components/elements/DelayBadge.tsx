import { getDelayStatusColor } from "@/utils/getDelayStatusColors";
import clsx from "clsx";

interface Props {
  text: string;
  delay: number;
  className?: string;
}

/**
 * @param text - Text to display inside the badge.
 * @param delay - Delay in minutes to determine the badge color.
 */

export function DelayBadge({ text, className, delay }: Props) {
  const colorDelay = getDelayStatusColor(delay);

  return (
    <p
      style={{
        backgroundColor: `${colorDelay}4D`,
      }}
      className={clsx(
        "inline-block font-semibold text-center rounded min-w-18 max-w-20 py-1 text-sm text-red-500 bg-red-400/20",
        className
      )}
    >
      <span
        style={{
          color: colorDelay,
          opacity: 1,
        }}
      >
        {text}
      </span>
    </p>
  );
}
