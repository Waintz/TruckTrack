import React from "react";

import { LoadIndicators } from "../ui/LoadIndicatorrs/LoadIndicators";
import { AlertCircle } from "lucide-react";
import { TooltipHelper } from "@/components/ui/tooltip/TooltipHelper";

interface Props {
  header?: boolean;
  className?: string;
  cursor?:
    | "cursor-not-allowed"
    | "cursor-pointer"
    | "cursor-default"
    | "cursor-auto";
  onClick?: () => void;
  name?: string;
  tooltipDescription?: string;
  slots: { slot: number; filled: number; capacity: number }[];
}

export function TierLayout({
  name,
  header = true,
  slots,
  tooltipDescription,
}: Props) {
  return (
    <section className="flex flex-col gap-4">
      {header && (
        <header className="flex items-center gap-2">
          {name || ""}
          <TooltipHelper
            homeText={<AlertCircle size={20} />}
            popupText={tooltipDescription || "null"}
          />
        </header>
      )}
      <LoadIndicators slots={slots} />
    </section>
  );
}
