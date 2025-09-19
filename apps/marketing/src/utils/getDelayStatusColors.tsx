import { ColorsValue } from "@/config/colors.config";
import { TruckStatusColors } from "@/types/truck";

export const getDelayStatusColor = (delay: number): ColorsValue => {
  if (delay >= 1 && delay < 60) {
    return TruckStatusColors.orange;
  } else if (delay >= 60) {
    return TruckStatusColors.red;
  }

  return TruckStatusColors.green;
};
