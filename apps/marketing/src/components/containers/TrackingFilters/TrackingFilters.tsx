"use client";

import { useFormattedDate } from "@/hooks/useFormattedDate";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import clsx from "clsx";
import { Search } from "lucide-react";
import { useState } from "react";

interface TrackingFiltersProps {
  className?: string;
}

export function TrackingFilters({ className }: TrackingFiltersProps) {
  const { formattedDate } = useFormattedDate({
    locale: "en-GB",
    formattedOptions: {
      weekday: "short",
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    },
    order: [
      "weekday",
      "day",
      "month",
      "hour",
      "literal",
      "minute",
      "literal",
      "second",
    ],
  });
  const [department, setDepartment] = useState("1");
  const [city, setCity] = useState("Barcelona");

  return (
    <div
      className={clsx(
        "bg-white px-4 py-2 rounded grid gap-4 sm:grid-cols-[1fr_auto_auto_auto] items-center",
        className
      )}
    >
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by tracking number"
          className="w-full pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <section className="flex gap-5 flex-col xs:flex-row">
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="w-full bg-ghost-white border-0 shadow-none">
            <p>
              <span className="opacity-50">City: </span>
              {city}
            </p>
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="Barcelona">Barcelona</SelectItem>
            <SelectItem value="Madrid">Madrid</SelectItem>
            <SelectItem value="Valencia">Valencia</SelectItem>
          </SelectContent>
        </Select>

        <Select value={department} onValueChange={setDepartment}>
          <SelectTrigger className="w-full bg-ghost-white border-0 shadow-none ">
            <p>
              <span className="opacity-50">Department: </span>
              {department}
            </p>
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <div className="text-gray-500 text-sm font-medium text-center">
        {formattedDate}
      </div>
    </div>
  );
}
