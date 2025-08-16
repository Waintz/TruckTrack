"use client";

import { useFormattedDate } from "@/hooks/useFormattedDate";
import { Search } from "lucide-react";

export function TrackingFilters() {
  const { formattedDate } = useFormattedDate('en-GB', {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by tracking number"
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-2 w-full sm:w-auto">
        <select className="border border-gray-200 rounded-md px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcelona</option>
          <option>Madrid</option>
          <option>Valencia</option>
        </select>

        <select className="border border-gray-200 rounded-md px-3 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Department 1</option>
          <option>Department 2</option>
        </select>
      </div>

      {/* Date */}
      <div className="text-gray-500 text-sm font-medium text-center sm:text-right w-full sm:w-auto">
        {formattedDate}
      </div>
    </div>
  );
}
