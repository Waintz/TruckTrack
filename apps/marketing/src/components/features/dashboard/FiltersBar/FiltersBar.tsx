"use client";

import clsx from "clsx";
import { FilterSearch } from "./components/FilterSearch";
import { IFiltersBarProps } from "./types/type";
import { FilterCity } from "./components/FilterCity";
import { FilterDepartment } from "./components/FilterDepartment";
import { DateView } from "./components/DateView";

export function FiltersBar({ options }: IFiltersBarProps) {
  return (
    <div
      className={clsx(
        "bg-white px-4 py-2 rounded grid gap-4 sm:grid-cols-[1fr_auto_auto_auto] items-center"
      )}
    >
      {options.search?.isActive && <FilterSearch {...options.search} />}

      <section className="flex gap-5 flex-col xs:flex-row">
        {options.city?.isActive && <FilterCity {...options.city} />}

        {options.department?.isActive && (
          <FilterDepartment {...options.department} />
        )}
      </section>

      {options.date && <DateView />}
    </div>
  );
}
