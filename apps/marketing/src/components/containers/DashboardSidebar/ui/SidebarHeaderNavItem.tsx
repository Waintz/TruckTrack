"use client";

import clsx from "clsx";
import { icons } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name?: string;
  count?: number | string;
  lucideIcon?: string;
  active?: boolean;
  path: string;
  pathIcon?: string;
  className?: string;
}

export function SidebarHeaderNavItem({
  lucideIcon,
  pathIcon,
  active = false,
  path,
  count,
  name,
  className,
}: Props) {
  const Icon = icons[lucideIcon as keyof typeof icons];
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      className={clsx(
        "flex justify-between items-center cursor-pointer",
        className
      )}
    >
      <p className="flex gap-2 opacity-50">
        {lucideIcon && Icon ? (
          <Icon />
        ) : (
          <Image src={pathIcon} width={25} height={25} alt={"icon"} />
        )}
        {name}
      </p>
      {count && (
        <p className="bg-ghost-white rounded min-w-8 min-h-8 flex justify-center items-center">
          <span className="opacity-50">{count}</span>
        </p>
      )}
    </button>
  );
}
