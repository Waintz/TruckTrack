"use client";

import { useState } from "react";
import { DashboardSidebarView } from "./DashboardSidebarView";
import clsx from "clsx";

interface DashboardSidebarContainerProps {
  className?: string;
}

export function DashboardSidebarContainer({
  className,
}: DashboardSidebarContainerProps) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <DashboardSidebarView
      className={clsx(className)}
      isOpen={isOpen}
      setIsOpen={handleClick}
    />
  );
}
