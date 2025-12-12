import { Building2, MapPin, Phone } from "lucide-react";
import { BranchesType } from "./model/types";

export function BranchesMainInfromation(
  branch: Pick<
    BranchesType,
    "city" | "name" | "phone" | "region" | "deliveries"
  >
) {
  return (
    <>
      <h3 className="font-semibold text-lg flex items-center gap-2">
        <Building2 className="w-5 h-5 text-gray-500" /> {branch.name}
      </h3>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <MapPin className="w-4 h-4" /> {branch.city}
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-1">
        <Phone className="w-4 h-4" /> {branch.phone}
      </p>
      <p className="text-sm text-gray-500">Region: {branch.region}</p>
      <p className="text-sm text-gray-500">
        Active deliveries:{" "}
        <span className="font-medium">{branch.deliveries}</span>
      </p>
    </>
  );
}
