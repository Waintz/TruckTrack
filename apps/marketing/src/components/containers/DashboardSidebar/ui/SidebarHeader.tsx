"use client";

import { Logo } from "@/components/elements/icons/Logo";
import { SidebarHeaderNavItem } from "./SidebarHeaderNavItem";
import { PAGES_CONFIG } from "@/config/pages.config";

export function SidebarHeader() {
  return (
    <header className="border-b-4 border-ghost-white">
      <main className="py-10">
        <section className="px-5">
          <Logo />
        </section>
        <section className="flex flex-col gap-1 mt-15 font-bold text-md ">
          <SidebarHeaderNavItem
            path={PAGES_CONFIG.REQUESTS.path}
            lucideIcon={"Info"}
            name={PAGES_CONFIG.REQUESTS.name}
            count={10}
          />
          <SidebarHeaderNavItem
            path={PAGES_CONFIG.NOTIFICATIONS.path}
            lucideIcon={"Bell"}
            name={PAGES_CONFIG.NOTIFICATIONS.name}
            count={1}
          />
        </section>
      </main>
    </header>
  );
}
