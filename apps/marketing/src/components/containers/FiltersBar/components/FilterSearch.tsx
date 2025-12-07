import { Search } from "lucide-react";
import { ISearchFilter } from "../types/type";

export function FilterSearch({ placeholder }: ISearchFilter) {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={18}
      />
      <input
        type="text"
        placeholder={placeholder || "Search by tracking number"}
        className="w-full pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
