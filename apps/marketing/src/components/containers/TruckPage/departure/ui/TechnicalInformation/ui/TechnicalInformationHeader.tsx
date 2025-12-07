import { LayoutContainerHeaders } from "@/components/containers/TruckPage/layouts/LayoutContainerHeaders";

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
