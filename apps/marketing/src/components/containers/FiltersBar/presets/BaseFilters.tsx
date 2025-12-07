import { FiltersBar } from "../FiltersBar";

export function BaseFilters() {
  return (
    <FiltersBar
      options={{
        city: { isActive: true },
        date: true,
        department: { isActive: true },
        search: { isActive: true },
      }}
    />
  );
}
