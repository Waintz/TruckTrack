"use client";

import React, { createContext, useCallback, useContext, useRef } from "react";

type ScrollContextType = {
  registerSection: (name: string, el: HTMLElement | null) => void;
  scrollToSection: (name: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const section = useRef<Map<string, HTMLElement | null>>(new Map());

  const registerSection = useCallback(
    (name: string, el: HTMLElement | null) => {
      section.current.set(name, el);
    },
    []
  );

  const scrollToSection = useCallback((name: string) => {
    const el = section.current.get(name);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <ScrollContext.Provider value={{ registerSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  console.log(context);
  if (!context) throw new Error("useScroll must be used within ScrollProvider");
  return context;
}
