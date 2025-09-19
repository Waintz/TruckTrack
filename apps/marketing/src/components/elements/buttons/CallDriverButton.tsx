import clsx from "clsx";
import { Phone } from "lucide-react";

export function CallDriverButton({ className }: { className?: string }) {
  return (
    <button
      className={clsx(
        "bg-purple text-ghost-white px-5 py-3 rounded-lg w-auto flex gap-2 items-center text-lg cursor-pointer hover:bg-purple/90 transition-colors",
        className
      )}
    >
      <Phone size={20} /> Call the driver
    </button>
  );
}
