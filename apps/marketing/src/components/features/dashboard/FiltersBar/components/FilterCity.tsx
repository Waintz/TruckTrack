import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ICityFilter } from "../types/type";
import { useState } from "react";

export function FilterCity({ isActive }: ICityFilter) {
  const [city, setCity] = useState("Barcelona");

  return (
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
  );
}
