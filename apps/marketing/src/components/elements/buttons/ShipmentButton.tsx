import { Plus } from "lucide-react";

export function ShipmentButton() {
  return (
    <button className="bg-purple text-white px-3 py-2 rounded-lg flex items-center gap-2">
      <Plus /> <span className="hidden">Create shipment</span>
    </button>
  );
}
