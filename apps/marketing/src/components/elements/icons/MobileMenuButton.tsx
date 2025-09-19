"use client";

import clsx from "clsx";

type MobileMenuButtonProps = {
  setIsOpen?: () => void;
  isOpen?: boolean;
  className?: string;
  gap?: string;
  color?: string;
};

export function MobileMenuButton({
  className,
  isOpen,
  setIsOpen,
  color = "black",
  gap = "1",
}: MobileMenuButtonProps) {
  return (
    <>
      <button
        onClick={setIsOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className={clsx(
          `relative w-8 h-8 flex flex-col justify-center items-center gap-${gap} z-20`,
          className
        )}
        type="button"
      >
        <span
          style={{ backgroundColor: color }}
          className={`block w-6 h-[2.5px] rounded transition-transform duration-300 ease-in-out origin-center
          ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
        />
        <span
          style={{ backgroundColor: color }}
          className={`block w-6 h-[2.5px] rounded transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          style={{ backgroundColor: color }}
          className={`block w-6 h-[2.5px] rounded transition-transform duration-300 ease-in-out origin-center
          ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
        />
      </button>
    </>
  );
}
