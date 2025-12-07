import { Surface } from "@/components/shared/Surface";
import clsx from "clsx";
import { AssignedDriverCard } from "../../../shared/AssignedDriverCard/AssignedDriverCard";

export function AssignedDriverView({ className }: { className?: string }) {
  return (
    <Surface
      className={clsx(
        "w-full flex flex-col py-7 px-6 sm:p-10 gap-8",
        className
      )}
    >
      <AssignedDriverCard />
    </Surface>
  );
}
