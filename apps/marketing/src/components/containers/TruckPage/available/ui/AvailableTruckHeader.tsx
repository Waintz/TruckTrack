import { useAppSelector } from "@/store/redux/redux";
import { DownloadTruckButton } from "./DownloadTruckButton";
import { selectSelectedPackages } from "./AvailablePackages/model";
import { useSpotlight } from "@/providers/SpotlightContext";

export function AvailableTruckHeader() {
  const selectedPackages = useAppSelector(selectSelectedPackages);

  const { setActive } = useSpotlight();

  return (
    <div className="hidden md:block">
      <DownloadTruckButton
        onClick={() => setActive("loadIndicators")}
        isActive={selectedPackages.length > 0}
      />
    </div>
  );
}
