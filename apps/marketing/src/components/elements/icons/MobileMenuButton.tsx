"use client";

import clsx from "clsx";
import { useState } from "react";

type MobileMenuButtonProps = {
  ModalWindow?: React.ComponentType<{ onClose: () => void }>;
  gap?: string;
  color?: string;
};

export function MobileMenuButton({ ModalWindow, color = 'black', gap }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className={clsx(`relative w-8 h-8 flex flex-col justify-center items-center gap-${gap} lg:hidden z-50`)}
        type="button"
      >
        <span
          className={`block w-6 h-[2.5px] bg-[${color}] rounded transition-transform duration-300 ease-in-out origin-center
          ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
        />
        <span
          className={`block w-6 h-[2.5px] bg-[${color}] rounded transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block w-6 h-[2.5px] bg-[${color}] rounded transition-transform duration-300 ease-in-out origin-center
          ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
        />
      </button>

      {isOpen && ModalWindow && (
        <ModalWindow onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
