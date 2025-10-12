"use client";

import { PAGES_CONFIG } from "@/config/pages.config";
import { formatBreadcrumbs } from "@/utils/formatBreadcrumbs";
import { getPathByName } from "@/utils/getPathByName";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  manualPath?: string;
  excludes?: string[];
}

export function Breadcrumbs({ manualPath, excludes }: Props) {
  const path = usePathname();
  const text = formatBreadcrumbs(manualPath ?? path, excludes);

  return (
    <nav>
      {text.map((item, index) => {
        const isLast = index === text.length - 1;

        return (
          <React.Fragment key={index}>
            <Link
              className="hover:underline inline"
              href={getPathByName(PAGES_CONFIG, item)}
            >
              <span
                className={clsx(
                  "text-lg font-bold opacity-50",
                  isLast && "text-purple opacity-100"
                )}
              >
                {" "}
                {item}{" "}
              </span>
            </Link>
            /
          </React.Fragment>
        );
      })}
    </nav>
  );
}
