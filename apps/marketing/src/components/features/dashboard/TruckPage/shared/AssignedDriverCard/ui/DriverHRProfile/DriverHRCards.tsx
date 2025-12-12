import { FileText, HeartPlus, History } from "lucide-react";
import { StatTile } from "@/components/ui/StatTile";

export function DriverHRCards() {
  return (
    <>
      <StatTile
        Icon={<HeartPlus className="w-4 h-4 text-blue" />}
        title="Last Medical Exam"
        subtitle="23 Jun, 2025"
      />
      <StatTile
        Icon={<FileText className="w-4 h-4 text-orange" />}
        title="License validity until"
        subtitle="23 Jun, 2025"
      />
      <StatTile
        Icon={<History className="w-4 h-4 text-red" />}
        title="Last briefing"
        subtitle="23 Jun, 2025"
      />
    </>
  );
}
