"use client";

import { ShipmentButton } from "@/components/elements/buttons/ShipmentButton";
import { Logo } from "@/components/elements/icons/Logo";
import { MobileMenuButton } from "@/components/elements/icons/MobileMenuButton";
import { COLORS } from "@/config/colors.config";
import clsx from "clsx";

export function HeaderDashboard({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex bg-white items-center justify-between p-4",
        className
      )}
    >
      <div>
        <Logo />
      </div>
      <div className="flex gap-5 items-center">
        <ShipmentButton icon={true} text={false} />
        <div className="bg-[#6940db]/10 rounded-lg p-1">
          <MobileMenuButton gap="1" color={COLORS.purple} />
        </div>
      </div>
    </div>
  );
}
