"use client";

import { COLORS } from "@/config/colors.config";
import { useIsActiveRoute } from "@/hooks/useIsActiveRoute";
import clsx from "clsx";
import { icons } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarNavItemProps {
  name: string;
  icon: string;
  path: string;
  className?: string;
  rightRender?: React.ReactNode;
}

export function SidebarNavItem({
  name,
  icon,
  className,
  path,
  rightRender,
}: SidebarNavItemProps) {
  const Icon = icons[icon as keyof typeof icons];
  const router = useRouter();
  const selected = useIsActiveRoute(path);

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
        "px-5 cursor-pointer py-2 border-l-4 transition-all flex items-center justify-between",
        className
      )}
    >
      <section className="flex items-center gap-2">
        <span style={selected ? {} : { opacity: 0.5 }}>
          <Icon color={selected ? COLORS.purple : "black"} width={25} />
        </span>
        <span style={selected ? {} : { opacity: 0.5 }} className="text-lg">
          {name}
        </span>
      </section>
      <section>{rightRender}</section>
    </button>
  );
}
