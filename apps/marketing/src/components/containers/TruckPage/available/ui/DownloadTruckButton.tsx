import { COLORS } from "@/config/colors.config";
import clsx from "clsx";
import { Download } from "lucide-react";

interface Props {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

export function DownloadTruckButton({
  onClick,
  className,
  isActive = true,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full p-3 transition-colors md:rounded-lg flex items-center gap-2 font-bold hover:brightness-90",
        className,
        isActive
          ? "bg-purple shadow shadow-purple text-white cursor-pointer"
          : "bg-white text-purple shadow cursor-not-allowed"
      )}
      disabled={!isActive}
    >
      <Download color={isActive ? COLORS.white : COLORS.purple} />
      <span>Download</span>
    </button>
  );
}
