"use client";

import { HEADER_NAV_MENU } from "@/constants/texts";
import { useScroll } from "@/providers/ScrollContext";

export function NavMenu() {
  const { scrollToSection } = useScroll();

  return (
    <nav
      className="hidden lg:flex h-10 items-center"
      aria-label="Основное меню"
    >
      <ul className="flex gap-5 items-center">
        {HEADER_NAV_MENU.map((e) => {
          return (
            <li
              key={e.nameSection}
              onClick={() => scrollToSection(e.nameSection)}
              className="cursor-pointer"
            >
              {e.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
