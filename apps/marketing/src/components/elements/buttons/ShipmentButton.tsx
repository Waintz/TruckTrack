import clsx from "clsx";
import { Plus } from "lucide-react";

export function ShipmentButton({
  icon = false,
  text = true,
  className,
}: {
  icon?: boolean;
  text?: boolean;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "bg-purple hover:bg-purple/90 cursor-pointer transition-colors text-white px-3 py-2 rounded flex items-center justify-center gap-2",
        className
      )}
    >
      {icon && <Plus />}{" "}
      {text && <span className="text-center text-lg">Create shipment</span>}
    </button>
  );
}
