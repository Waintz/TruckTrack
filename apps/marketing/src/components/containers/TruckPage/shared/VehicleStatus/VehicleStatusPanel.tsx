import { TECH_INFO_KEYS, TechnicalInformationTruck } from "@/types/truck";
import { VehicleStatsList } from "./VehicleStatsList";

// это сами данные из бд про фуры, НЕ МАКСИМАЛКИ, а просто что на данный момент у неё
const MOCK_TECHNICAL: TechnicalInformationTruck = {
  [TECH_INFO_KEYS.FUEL_LEVEL]: { value: "75", unit: "%" },
  [TECH_INFO_KEYS.ENGINE_TEMP]: { value: "90", unit: "°C" },
  [TECH_INFO_KEYS.DISTANCE_TRAVELED]: { value: "12500", unit: "km" },
  [TECH_INFO_KEYS.TIRE_PRESSURE]: { value: "2.3", unit: "bar" },
  [TECH_INFO_KEYS.FUEL_CONSUMPTION]: { value: "8.5", unit: "L/100km" },
  [TECH_INFO_KEYS.LAST_MAINTENANCE]: {
    value: "2025-09-25T00:00:00Z",
    note: "date",
  },
  [TECH_INFO_KEYS.AVERAGE_SPEED]: { value: "65", unit: "km/h" },
  [TECH_INFO_KEYS.OIL_CONDITION]: { value: "80", unit: "%" },
};

export function VehicleStatusPanel() {
  return (
    <section className="grid gap-10">
      <VehicleStatsList techical={MOCK_TECHNICAL} className="" />
    </section>
  );
}
