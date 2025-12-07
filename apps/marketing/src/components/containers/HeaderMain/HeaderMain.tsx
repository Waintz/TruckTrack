"use client";

import { Logo } from "../../elements/icons/Logo";
import { NavMenu } from "../../ui/navigation/NavMenu";
import { MobileMenuButton } from "../../elements/icons/MobileMenuButton";
import { MobileMenuModal } from "@/components/ui/navigation/MobileMenuModal";
import { useModalState } from "@/hooks/useModalState";
import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";

export function HeaderMain() {
  const { handleStateChange, isOpen } = useModalState();

  return (
    <header className="flex items-center justify-between container mx-auto p-5 bg-white shadow-2xs sticky top-0 left-0 z-100">
      <section className="flex items-center gap-1">
        <Logo />
      </section>
      <NavMenu />
      <section>
        <MobileMenuButton
          setIsOpen={handleStateChange}
          isOpen={isOpen}
          className="lg:hidden"
        />
        {isOpen && <MobileMenuModal onClose={handleStateChange} />}

        <Button
          variant="outline"
          ariaLabel="Заказать звонок"
          color={COLORS.blue}
          className="hidden lg:block"
          paddingY={10}
        >
          Заказать звонок
        </Button>
      </section>
    </header>
  );
}
