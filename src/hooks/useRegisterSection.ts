'use client';

import { useScroll } from "@/providers/ScrollContext";
import { useCallback } from "react";

export function useRegisterSection(name: string) {
  const { registerSection } = useScroll();

  return useCallback(
    (el: HTMLElement | null) => {
      registerSection(name, el);
    },
    [name, registerSection]
  );
}
