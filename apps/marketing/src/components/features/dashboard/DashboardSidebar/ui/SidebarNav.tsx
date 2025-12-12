"use client";

import { NavigationDashboardItem } from "@/config/pages.config";
import { SidebarNavItem } from "./SidebarNavItem";

interface SidebarNavProps {
  navigationDashboard: readonly NavigationDashboardItem[];
}

export function SidebarNav({ navigationDashboard }: SidebarNavProps) {
  return (
    <nav className="py-10 mr-5">
      <ul className="flex flex-col">
        {navigationDashboard.map((item) => {
          return <SidebarNavItem key={item.name} {...item} />;
        })}
      </ul>
    </nav>
  );
}
