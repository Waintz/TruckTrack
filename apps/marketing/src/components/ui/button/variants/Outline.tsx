import clsx from "clsx";
import { OutlineProps } from "../button.types";

export function Outline({
  color = "#f6f5fa",
  ariaLabel,
  text,
  paddingY,
  className,
  onClick,
}: Omit<OutlineProps, "variant">) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full flex text-center items-center justify-center px-6 font-semibold shadow-md transition hover:brightness-80 cursor-pointer border-2 p-4",
        className
      )}
      style={{
        border: `2px solid ${color}`,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        color: color,
      }}
      aria-label={ariaLabel}
    >
      <p>{text}</p>
    </button>
  );
}
