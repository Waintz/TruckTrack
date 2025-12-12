import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { IDepartmentFilter } from "../types/type";

export function FilterDepartment({ isActive }: IDepartmentFilter) {
  const [department, setDepartment] = useState("1");

  return (
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
  );
}
