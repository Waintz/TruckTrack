"use client";

import { ShipmentButton } from "@/components/elements/buttons/ShipmentButton";
import { Logo } from "@/components/elements/icons/Logo";
import { MobileMenuButton } from "@/components/elements/icons/MobileMenuButton";

export function HeaderDashboard() {
  return (
    <div className="flex bg-white items-center justify-between p-4">
      <div>
        <Logo />
      </div>
      <div className="flex gap-5 items-center">
        <ShipmentButton />
        <div className="bg-[#6940db]/10 rounded-lg p-1">
          <MobileMenuButton gap="1" color="#7B57DF" />
        </div>
      </div>
    </div>
  );
}
