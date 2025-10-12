import { CardList } from "@/components/shared/CardList";
import { AvailablePackagesCard } from "./AvailablePackagesCard";
import { IParcel } from "@/types/truck";
import { useAppDispatch, useAppSelector } from "@/store/redux/redux";
import { selectSelectedPackages, toggleSelectedPackage } from "../../../model";
import { handleSelectChangeHelper } from "@/components/shared/TableList/helpers/tableSelectionHelper";

interface Props {
  packages: IParcel[];
  className?: string;
}

export function AvailablePackagesCards({ packages, className }: Props) {
  const dispatch = useAppDispatch();
  const selectedPackages = useAppSelector(selectSelectedPackages);

  const handleSelectChange = (selectedIds: number[]) => {
    handleSelectChangeHelper(
      packages,
      selectedPackages,
      selectedIds,
      ({ packageId, weight }) =>
        dispatch(toggleSelectedPackage({ packageId, weight }))
    );
  };

  return (
    <CardList
      className={className}
      renderItem={(item) => (
        <AvailablePackagesCard
          key={item.id}
          parcelItem={item}
          selectedIds={selectedPackages}
          onSelectChange={handleSelectChange}
        />
      )}
      items={packages}
    />
  );
}
