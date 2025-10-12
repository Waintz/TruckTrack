import { SidebarUserProfile } from "./SidebarUserProfile";
import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";
import { Plus } from "lucide-react";

export function SidebarFooter() {
  return (
    <div>
      <div className="border-b-4 border-ghost-white">
        <div className="px-2">
          <Button
            variant="primary"
            text={
              <>
                <Plus /> Create shipment
              </>
            }
            ariaLabel="Create shipment"
            color={COLORS.purple}
            className="rounded-lg font-bold w-full mb-10"
          />
        </div>
      </div>
      <SidebarUserProfile />
    </div>
  );
}
