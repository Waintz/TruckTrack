"use client";

import { AlertCircle, CheckCircle2, MoreVertical } from "lucide-react";
import Image from "next/image";
import { BranchesMainInfromation } from "./BranchesMainInfromation";
import { BranchesType } from "./model/types";

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  maintenance: "bg-yellow-100 text-yellow-700",
  offline: "bg-red-100 text-red-700",
};

const statusIcons: Record<string, React.ReactNode> = {
  active: <CheckCircle2 className="w-4 h-4" />,
  maintenance: <AlertCircle className="w-4 h-4" />,
  offline: <AlertCircle className="w-4 h-4" />,
};

export function BranchesCard(branch: BranchesType) {
  return (
    <article
      key={branch.id}
      className="rounded-2xl overflow-hidden shadow-md bg-white border hover:shadow-lg transition relative"
    >
      <div className="relative h-36">
        <Image
          width={100}
          height={100}
          src={branch.image}
          alt={branch.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <span
            className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full font-medium ${
              statusColors[branch.status]
            }`}
          >
            {statusIcons[branch.status]}
            {branch.status.charAt(0).toUpperCase() + branch.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <BranchesMainInfromation {...branch} />
      </div>

      <div className="flex justify-between items-center border-t p-3">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View details
        </button>
        <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
      </div>
    </article>
  );
}
