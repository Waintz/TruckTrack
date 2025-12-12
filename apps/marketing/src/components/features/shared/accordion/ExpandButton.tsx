import clsx from "clsx";
import { ElementType } from "react";

interface Props {
  as?: ElementType;
  isOpen?: boolean;
  setIsOpen?: () => void;
  classNameWrapper?: string;
  homeColor?: string; // ожидается HEX, например "#7B57DF"
  classNamePlus?: string;
}

export function ExpandButton({
  classNamePlus,
  classNameWrapper,
  homeColor = "#7B57DF",
  isOpen = false,
  setIsOpen,
  as: Tag = "button",
}: Props) {
  return (
    <Tag
      onClick={setIsOpen}
      className={clsx(
        "flex items-center justify-center w-6 h-6 rounded-full border transition-colors duration-300",
        classNameWrapper
      )}
      style={{
        backgroundColor: isOpen ? "#fff" : homeColor,
        borderColor: isOpen ? homeColor : "transparent",
      }}
    >
      <span
        className={clsx(
          "block relative w-3 h-3 transition-transform duration-700",
          isOpen && "rotate-[360deg]"
        )}
      >
        <span
          className={clsx(
            "absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 rounded transition-colors duration-300",
            classNamePlus
          )}
          style={{
            backgroundColor: isOpen ? homeColor : "#fff",
          }}
        />
        <span
          className={clsx(
            "absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 rounded transition-colors duration-300",
            classNamePlus
          )}
          style={{
            backgroundColor: isOpen ? homeColor : "#fff",
          }}
        />
      </span>
    </Tag>
  );
}
