import clsx from "clsx";
import { DefaultProps } from "../button.types";

export function Default({
  children,
  ariaLabel,
  className,
  color,
  onClick,
  paddingX,
  colorText,
  paddingY,
}: Omit<DefaultProps, "variant">) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "rounded-md flex text-center items-center justify-center px-6 font-semibold shadow-md transition hover:brightness-80 cursor-pointer border-2 p-4",
        className
      )}
      style={{
        background: color,
        color: colorText,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
    >
      {children}
    </button>
  );
}
