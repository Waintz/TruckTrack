"use client";

import { NavigationDashboardItem } from "@/config/pages.config";
import { SidebarNavItem } from "./SidebarNavItem";
import { usePathname } from "next/navigation";
import { getBasePath } from "@/utils/getBasePath";

interface SidebarNavProps {
  navigationDashboard: readonly NavigationDashboardItem[];
}

export function SidebarNav({ navigationDashboard }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="py-10 mr-5">
      <ul className="flex flex-col">
        {navigationDashboard.map((item) => {
          return (
            <SidebarNavItem
              selected={
                getBasePath(pathname) === getBasePath(item.path) ? true : false
              }
              key={item.name}
              {...item}
            />
          );
        })}
      </ul>
    </nav>
  );
}