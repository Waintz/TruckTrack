import React, { useEffect } from "react";
import clsx from "clsx";
import { useSpotlight } from "@/providers/SpotlightContext";
import { LoadIndicator } from "./LoadIndicator";
import { useAppSelector } from "@/store/redux/redux";
import { selectTotalWeight } from "../../../AvailablePackages/model";
import { canPlaceSelectedItems } from "../../model/canPlaceSelectedItems";

interface Props {
  slots: { slot: number; filled: number; capacity: number }[];
  gridCols?: number;
}

export const LoadIndicators = React.memo(function LoadIndicators({
  slots,
  gridCols = 4,
}: Props) {
  const { registrationIgnoratedElement, getIgnoreElement, setActive, state } =
    useSpotlight();

  const totalWeightPackages = useAppSelector(selectTotalWeight);

  useEffect(() => {
    const registeredSlots = new Set<string>();

    slots.forEach((slot) => {
      if (!registeredSlots.has(slot.slot.toString())) {
        registrationIgnoratedElement("loadIndicators", slot.slot.toString());
        registeredSlots.add(slot.slot.toString());
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slots]);

  return (
    <div
      className={clsx("grid gap-2 grid-cols-4")}
      style={{ gridTemplateColumns: `repeat(4, minmax(0, ${gridCols}fr))` }}
    >
      {state.isActive && (
        <div
          onClick={() => setActive("loadIndicators")}
          className={clsx("fixed inset-0 bg-black/10 z-[10]")}
        />
      )}

      {slots.map((slot, index) => {
        const ignoreItem = getIgnoreElement(slot.slot.toString());
        const isAllowed =
          canPlaceSelectedItems({
            selectedTotalWeight: totalWeightPackages,
            cellCapacity: slot.capacity - slot.filled,
          }) && state.isActive;

        return (
          <LoadIndicator
            key={index}
            cursor={isAllowed ? "cursor-pointer" : "cursor-not-allowed"}
            className={clsx(ignoreItem ? "z-51" : "")}
            workload={slot.filled}
            maximumСapacity={slot.capacity}
          />
        );
      })}
    </div>
  );
});
