// TruckStatus

import { TruckStatus } from "@/types/truck";

export const getTruckStatus = (
  WillLeave: string,
  WillArrvie: string,
  hasTruckArrived: boolean
): TruckStatus => {
  if (hasTruckArrived) return "Arrived";

  const currentTime = new Date().toISOString();

  if (currentTime > WillLeave && currentTime < WillArrvie) {
    return "On way";
  }

  return "Delayed";
};
