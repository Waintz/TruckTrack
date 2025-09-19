import { ShipmentButton } from "@/components/elements/buttons/ShipmentButton";
import { SidebarUserProfile } from "./SidebarUserProfile";

export function SidebarFooter() {
  return (
    <div>
      <div className="border-b-4 border-ghost-white">
        <div className="px-2">
          <ShipmentButton icon={true} className="w-full mb-10" />
        </div>
      </div>
      <SidebarUserProfile />
    </div>
  );
}
