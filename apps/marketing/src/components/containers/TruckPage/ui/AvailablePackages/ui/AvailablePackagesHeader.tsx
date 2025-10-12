import { AvailablePackagesTableInformation } from "./packages/table/AvailablePackagesTableInformation";

export function AvailablePackagesHeader() {
  return (
    <header className="flex items-center flex-wrap justify-between sm:gap-5 sm:justify-start gap-2">
      <h1 className="text-lg xl:text-2xl font-bold">Available packages</h1>
      <AvailablePackagesTableInformation />
    </header>
  );
}
