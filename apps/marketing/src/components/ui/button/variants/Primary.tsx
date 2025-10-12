import clsx from "clsx";
import { PrimaryProps } from "../button.types";
import { COLORS } from "@/config/colors.config";

export function Primary({
  color = COLORS.ghostWhite,
  colorText = COLORS.white,
  ariaLabel,
  text,
  paddingY,
  paddingX,
  className,
  onClick,
}: Omit<PrimaryProps, "variant">) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "py-4 rounded-full text-center px-6 font-semibold shadow-md transition hover:brightness-90 cursor-pointer",
        className
      )}
      style={{
        color: colorText,
        background: color,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      aria-label={ariaLabel}
    >
      <p className="flex font-bold items-center justify-center gap-2">{text}</p>
    </button>
  );
}
