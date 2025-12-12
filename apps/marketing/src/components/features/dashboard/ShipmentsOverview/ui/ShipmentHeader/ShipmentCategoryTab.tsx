"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

interface ShipmentsCategoryTabProps {
  name: string;
  selected?: boolean;
  path: string;
  className?: string;
  count?: number;
}

export function ShipmentsCategoryTab({
  name,
  className,
  count,
  selected = true,
  path,
}: ShipmentsCategoryTabProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(path)}
      className={clsx(
        "flex justify-center py-2 px-5 rounded min-w-25 cursor-pointer",
        selected === false
          ? "text-purple bg-purple/10 hover:bg-purple/30"
          : "text-white bg-purple",
        className
      )}
    >
      <p>
        <span className="">{name} </span>
        {count && <span className="">({count})</span>}
      </p>
    </button>
  );
}
