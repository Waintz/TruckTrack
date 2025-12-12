import { LayoutContainerHeaders } from "@/components/features/dashboard/TruckPage/layouts/LayoutContainerHeaders";

export function TechnicalInformationHeader() {
  return (
    <LayoutContainerHeaders
      title="Technical information"
      classNameTitle="text-xl"
      renderMoreInformations={
        <span className="text-xl">
          Status: <span className="opacity-80 text-red font-bold">Dangerous</span>
        </span>
      }
    />
  );
}
