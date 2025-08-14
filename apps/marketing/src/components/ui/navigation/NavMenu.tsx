"use client";

import { HEADER_NAVIGATION_MENU } from "@/constants/texts";
import { useScroll } from "@/providers/ScrollContext";
import { usePathname, useRouter } from "next/navigation";

export function NavMenu() {
  const { scrollToSection } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (section: string) => {
    if (pathname === "/") {
      scrollToSection(section);
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <nav
      className="hidden lg:flex h-10 items-center"
      aria-label="Основное меню"
    >
      <ul className="flex gap-5 items-center">
        {HEADER_NAVIGATION_MENU.map((e) => {
          return (
            <li
              key={e.nameSection}
              onClick={() => handleClick(e.nameSection)}
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
