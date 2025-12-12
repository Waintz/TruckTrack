import { AssignedDriverFooter } from "./ui/AssignedDriverFooter";
import { AssignedDriverHeader } from "./ui/AssignedDriverHeader";
import { AssignedDriverMain } from "./ui/AssignedDriverMain";

export function AssignedDriverCard() {
  return (
    <article className="flex flex-col gap-6">
      <AssignedDriverHeader />

      <AssignedDriverMain />

      <AssignedDriverFooter />
    </article>
  );
}
