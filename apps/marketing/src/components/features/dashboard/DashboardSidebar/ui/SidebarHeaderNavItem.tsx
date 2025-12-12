"use client";

import { useIsActiveRoute } from "@/hooks/useIsActiveRoute";
import clsx from "clsx";
import { icons } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name?: string;
  count?: number | string;
  lucideIcon?: string;
  path: string;
  pathIcon?: string;
  className?: string;
}

export function SidebarHeaderNavItem({
  lucideIcon,
  pathIcon,
  path,
  count,
  name,
  className,
}: Props) {
  const Icon = icons[lucideIcon as keyof typeof icons];
  const router = useRouter();
  const isActiveRoute = useIsActiveRoute(path);

  return (
    <button
      onClick={() => router.push(path)}
      className={clsx(
        "flex justify-between items-center cursor-pointer px-5 py-2",
        isActiveRoute && "bg-ghost-white",
        className
      )}
    >
      <p className={clsx("flex gap-2")}>
        {lucideIcon && Icon ? (
          <Icon
            className={clsx(isActiveRoute ? "text-purple opacity-100" : "opacity-50")}
          />
        ) : (
          <Image src={pathIcon} width={25} height={25} alt={"icon"} />
        )}
        <span className="opacity-50">{name}</span>
      </p>
      {count && (
        <p
          className={clsx(
            "rounded min-w-8 min-h-8 flex justify-center items-center",
            isActiveRoute ? "bg-white" : "bg-ghost-white"
          )}
        >
          <span className="opacity-50">{count}</span>
        </p>
      )}
    </button>
  );
}
