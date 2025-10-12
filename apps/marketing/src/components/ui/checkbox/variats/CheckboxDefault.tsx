import { COLORS } from "@/config/colors.config";
import clsx from "clsx";
import { Check } from "lucide-react";
import { KeyboardEvent, useState } from "react";

interface ICheckboxDefault {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function CheckboxDefault({
  className,
  checked,
  onCheckedChange,
}: ICheckboxDefault) {
  const handleToggle = () => onCheckedChange?.(!checked);

  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <span
      tabIndex={0}
      role="checkbox"
      aria-checked={checked}
      onKeyDown={handleKeyDown}
      onClick={handleToggle}
      className={clsx(
        "w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer",
        checked ? "border-purple" : "",
        className
      )}
    >
      {checked && <Check color={COLORS.purple} size={15} />}
    </span>
  );
}
