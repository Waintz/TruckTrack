"use client";

import { Logo } from "@/components/elements/icons/Logo";
import { SidebarHeaderNavItem } from "./SidebarHeaderNavItem";

type SidebarHeaderNav = {
  name: string;
  lucideIcon?: string;
  pathIcon?: string;
  path: string;
  count?: number | string;
};

const SIDEBAR_HEADER_NAV: SidebarHeaderNav[] = [
  {
    name: "Requests",
    lucideIcon: "Info",
    path: "/requests",
    count: 10,
  },
  {
    name: "Notifications",
    lucideIcon: "Bell",
    path: "/requests",
    count: 1,
  },
];

export function SidebarHeader() {
  return (
    <header className="border-b-4 border-ghost-white">
      <main className="px-5 py-10">
        <Logo />
        <section className="flex flex-col gap-3 mt-15 font-bold text-md">
          {SIDEBAR_HEADER_NAV.map((item) => (
            <SidebarHeaderNavItem
              path={item.path}
              key={item.name}
              count={item.count}
              lucideIcon={item.lucideIcon}
              pathIcon={item.pathIcon}
              name={item.name}
            />
          ))}
        </section>
      </main>
    </header>
  );
}
