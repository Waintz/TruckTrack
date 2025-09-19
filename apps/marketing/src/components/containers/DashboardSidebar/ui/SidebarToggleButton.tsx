import clsx from "clsx";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  className?: string;
  setIsOpen: () => void;
}

export function SidebarToggleButton({
  className,
  isOpen,
  setIsOpen,
}: SidebarToggleButtonProps) {
  return (
    <div
      className={clsx(
        className,
        "fixed transition-all duration-300 ease-in-out flex items-center justify-center rounded-full",
        "bg-ghost-white",
        isOpen ? "left-60 top-4 w-12 h-12" : "left-1 top-1"
      )}
    >
      <button
        className="cursor-pointer bg-purple/20 text-purple rounded-full h-8 w-8 flex items-center justify-center"
        onClick={setIsOpen}
      >
        {isOpen ? "←" : "→"}
      </button>
    </div>
  );
}
