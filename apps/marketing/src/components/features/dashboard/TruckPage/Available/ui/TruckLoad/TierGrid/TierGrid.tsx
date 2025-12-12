import { TierLayout } from "./TierLayout";

const loadIndicators = {
  upper: [
    { slot: 1, filled: 20, capacity: 100 },
    { slot: 2, filled: 0, capacity: 100 },
    { slot: 3, filled: 0, capacity: 100 },
    { slot: 4, filled: 20, capacity: 100 },
  ],
  middle: [
    { slot: 1, filled: 0, capacity: 100 },
    { slot: 2, filled: 30, capacity: 100 },
    { slot: 3, filled: 0, capacity: 100 },
    { slot: 4, filled: 0, capacity: 100 },
  ],
  lower: [
    { slot: 1, filled: 0, capacity: 100 },
    { slot: 2, filled: 0, capacity: 100 },
    { slot: 3, filled: 30, capacity: 100 },
    { slot: 4, filled: 0, capacity: 100 },
  ],
};

export function TierGrid() {
  return (
    <article className="flex flex-col gap-5">
      {Object.entries(loadIndicators).map(([key, value]) => (
        <TierLayout
          key={key}
          name={`${key.charAt(0).toUpperCase() + key.slice(1)} Tier`}
          slots={value}
          tooltipDescription={`This is the ${key} tier load indicator.`}
        />
      ))}
    </article>
  );
}
