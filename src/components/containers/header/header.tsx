'use client';

import { RequestCallButton } from "../../elements/buttons/RequestCallButton";
import { Logo } from "../../elements/icons/Logo";
import { NavMenu } from "../../ui/navigation/NavMenu";
import { MobileMenuButton } from "../../elements/icons/MobileMenuButton";

export function Header() {
  return (
    <header className="flex items-center justify-between container mx-auto p-5 bg-white shadow-2xs sticky top-0 left-0 z-100">
      <section className="flex items-center gap-1">
        <Logo />
      </section>
      <NavMenu />
      <section>
        <MobileMenuButton />
        <RequestCallButton className="hidden lg:block h-10" />
      </section>
    </header>
  );
}
