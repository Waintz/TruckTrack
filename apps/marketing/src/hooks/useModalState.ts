import { useState } from "react";

interface ModalState {
  handleStateChange: () => void;
  isOpen: boolean;
}

export function useModalState(initialStateModal?: boolean): ModalState {
  const [isOpen, setIsOpen] = useState<boolean>(initialStateModal || false);

  const handleStateChange = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    handleStateChange,
    isOpen,
  };
}
