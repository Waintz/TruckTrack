import React from "react";
import { LoadIndicator } from "./LoadIndicator";

interface Props {
  slots: { slot: number; filled: number; capacity: number }[];
  gridCols?: number;
}

export function LoadIndicators({ slots, gridCols = 4 }: Props) {
  return (
    <div
      className="grid gap-2  grid-cols-4"
      style={{
        gridTemplateColumns: `repeat(4, minmax(0, ${gridCols}fr))`,
      }}
    >
      {slots.map((slot) => (
        <React.Fragment key={slot.slot}>
          <LoadIndicator
            workload={slot.filled}
            maximumСapacity={slot.capacity}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
