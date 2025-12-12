import { ProgressBar } from "@/components/elements/ProgressBar/ProgessBar";
import {
  TechnicalPossibleNotes,
  VariantTechnicalInformation,
} from "@/types/truck";
import { calculatePercentage } from "@/utils/calculatePercentage";
import { formatIsoToDateTime } from "@/utils/formatIsoToDateTime";
import { fromatIsoToUnixDate } from "@/utils/fromatIsoToUnixDate";
import {
  Activity,
  Droplets,
  Fuel,
  Gauge,
  Thermometer,
  Wrench,
} from "lucide-react";
import React from "react";

interface Props {
  title: string;
  value: string;
  className?: string;
  unit?: string;
  note?: TechnicalPossibleNotes;
}

// из бд про фуру приходит, про её максимальные характеристики 
export const MAX_VALUES: Partial<Record<VariantTechnicalInformation, number>> =
  {
    "Fuel level": 100,
    "Distance traveled": 200000,
    "Tire pressure": 5,
    "Engine temp": 120,
    "Fuel consumption": 20,
    "Average speed": 200,
    "Last maintenance": 31536000,
    "Oil condition": 100,
  };

const ICONS: Record<string, React.ReactNode> = {
  "Fuel level": <Fuel size={20} className="text-indigo-500" />,
  "Engine temp": <Thermometer size={20} className="text-rose-500" />,
  "Distance traveled": <Gauge size={20} className="text-blue-500" />,
  "Tire pressure": <Activity size={20} className="text-amber-500" />,
  "Fuel consumption": <Droplets size={20} className="text-cyan-500" />,
  "Average speed": <Gauge size={20} className="text-emerald-500" />,
  "Last maintenance": <Wrench size={20} className="text-gray-500" />,
  "Oil condition": <Droplets size={20} className="text-sky-500" />,
};

export function VehicleGaugeStat({
  title,
  value,
  unit,
  className,
  note,
}: Props) {
  const maxValues = MAX_VALUES[title as VariantTechnicalInformation];
  const isDate = note === "date";
  const progress = calculatePercentage({
    total: maxValues || 100,
    usage: isDate
      ? fromatIsoToUnixDate(new Date().toISOString()) -
        fromatIsoToUnixDate(value)
      : parseFloat(value),
  });
  const formatDate =
    isDate &&
    formatIsoToDateTime({
      time: value,
      options: { day: true, month: true, year: true },
    });

  const icon = ICONS[title];

  return (
    <div
      className={`flex flex-col gap-4 border-2 border-gray-100 rounded p-3 ${className}`}
    >
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <div className="bg-ghost-white p-3 rounded-lg">{icon}</div>
          <h1>{title}</h1>
        </div>
        <div>
          <p className="flex items-center gap-1">
            {!isDate ? (
              <>
                <span className="font-bold">{value}</span>
                <span>{unit}</span>
              </>
            ) : (
              <>
                <span>{formatDate}</span>
              </>
            )}
          </p>
        </div>
      </div>
      <div>
        <ProgressBar
          customColor="#4a6cf7"
          progressBarMode="line"
          lineDimensions={{ height: "7px", width: "100%" }}
          dailyProgress={progress}
          place="left right"
          fillingMode="normal"
        />
      </div>
    </div>
  );
}
