"use client";

import { Logo } from "@/components/elements/icons/Logo";
import { MobileMenuButton } from "@/components/elements/icons/MobileMenuButton";
import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";
import clsx from "clsx";
import { Plus } from "lucide-react";

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
        <Button
          variant="primary"
          ariaLabel="Create shipment"
          color={COLORS.purple}
          className="font-bold"
          paddingY={10}
          paddingX={20}
        >
          <Plus />
        </Button>
        <div className="bg-[#6940db]/10 rounded-lg p-1">
          <MobileMenuButton gap="1" color={COLORS.purple} />
        </div>
      </div>
    </div>
  );
}
