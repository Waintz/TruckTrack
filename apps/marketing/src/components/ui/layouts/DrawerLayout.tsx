import clsx from "clsx";
import { X } from "lucide-react";

interface DrawerLayoutProps {
  children: React.ReactNode;
  position: "left" | "right";
  className?: string;
  onClose?: () => void;
}

export function DrawerLayout({
  children,
  position,
  className,
  onClose,
}: DrawerLayoutProps) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[6px]"
        onClick={onClose}
      />

      <aside
        className={clsx(
          `absolute top-0 ${
            position === "left" ? "left-0" : "right-0"
          } h-full w-64 bg-white shadow-lg flex flex-col overflow-auto  ${className}`,
          position === "left" ? "rounded-tr-md rounded-br-3xl" : "rounded-tl-md rounded-bl-3xl"
        )}
      >
        <div
          className={clsx(
            "flex opacity-80",
            position == "left" ? "justify-end" : "justify-start"
          )}
          onClick={onClose}
        >
          <X size={20} opacity={0.6} className="cursor-pointer" />
        </div>
        {children}
      </aside>
    </div>
  );
}
