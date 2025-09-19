"use client";

import { COLORS } from "@/config/colors.config";
import clsx from "clsx";
import { icons } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarNavItemProps {
  name: string;
  icon: string;
  path: string;
  selected: boolean;
  className?: string;
}

export function SidebarNavItem({
  name,
  icon,
  selected,
  className,
  path,
}: SidebarNavItemProps) {
  const Icon = icons[icon as keyof typeof icons];
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      key={name}
      style={
        selected
          ? {
              backgroundColor: COLORS.ghostWhite,
              borderLeft: `4px solid ${COLORS.purple}`,
            }
          : {}
      }
      className={clsx(
        "px-5 cursor-pointer py-2 flex items-center gap-2 border-l-4 transition-all",
        className
      )}
    >
      <span style={selected ? {} : { opacity: 0.5 }}>
        <Icon color={selected ? COLORS.purple : "black"} width={25} />
      </span>
      <span style={selected ? {} : { opacity: 0.5 }} className="text-lg">
        {name}
      </span>
    </button>
  );
}
