"use client";

import { MobileMenuButton } from "@/components/elements/icons/MobileMenuButton";
import { ModalLayout } from "@/components/ui/layouts/ModalLayout";
import { useModalState } from "@/hooks/useModalState";
import { ShipmentsCategoryTabs } from "./ShipmentCategoryTabs";

interface ShipmentsCategoryModalProps {
  className?: string;
}

export function ShipmentsCategoryModal({
  className,
}: ShipmentsCategoryModalProps) {
  const { handleStateChange, isOpen } = useModalState();

  return (
    <>
      <MobileMenuButton
        className={className}
        isOpen={isOpen}
        setIsOpen={handleStateChange}
      />
      {isOpen && <ModalLayout onClose={handleStateChange}>
          <ShipmentsCategoryTabs className="flex-col" />
        </ModalLayout>}
    </>
  );
}
