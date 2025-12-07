import { useAppSelector } from "@/store/redux/redux";
import { selectTotalQuantitySelected, selectTotalWeight } from "../../../model";

export function AvailablePackagesTableInformation() {
  const totalSelectedPackages = useAppSelector(selectTotalQuantitySelected);
  const weightSelectedPackages = useAppSelector(selectTotalWeight);

  return (
    <div className="flex gap-4 text-sm">
      <p className="">
        <span className="opacity-50">Selected: </span>
        <span>{totalSelectedPackages}</span>
      </p>
      <p className="">
        <span className="opacity-50">Weight, kg: </span>
        <span>{weightSelectedPackages}</span>
      </p>
    </div>
  );
}
