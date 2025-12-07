"use client";

import React, { useContext } from "react";

type SpotlightContextType = {
  state: {
    group: string;
    isActive: boolean;
  };
  setActive: (group: string) => void;
  registrationIgnoratedElement: (group: string, id: string) => void;
  getIgnoreElement: (id: string) => boolean;
};

const SpotlightContext = React.createContext<SpotlightContextType | undefined>(
  undefined
);

export function SpotlightProvider({ children }: { children: React.ReactNode }) {
  const [state, setIsState] = React.useState({
    group: "",
    isActive: false,
  });
  const [ignoreElements, setIgnoreElements] = React.useState<
    Map<string, Record<string, boolean>>
  >(new Map([["group1", { id1: true, id2: true }]]));

  const getIgnoreElement = (id: string): boolean => {
    const ignoreElement = ignoreElements.get(state.group)?.[id];

    if (ignoreElement) {
      return true;
    } else {
      return false;
    }
  };

  const registrationIgnoratedElement = (group: string, id: string) => {
    setIgnoreElements((prev) => {
      const newMap = new Map(prev);
      const groupElements = newMap.get(group) || {};
      newMap.set(group, { ...groupElements, [id]: true });
      return newMap;
    });
  };

  const setActive = (group: string) => {
    setIsState((prev) => ({
      ...prev,
      group: group,
      isActive: !prev.isActive,
    }));
  };

  return (
    <SpotlightContext.Provider
      value={{
        state,
        setActive,
        registrationIgnoratedElement,
        getIgnoreElement,
      }}
    >
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const context = useContext(SpotlightContext);
  if (!context) {
    throw new Error("useSpotlight must be used within a SpotlightProvider");
  }
  return context;
}
