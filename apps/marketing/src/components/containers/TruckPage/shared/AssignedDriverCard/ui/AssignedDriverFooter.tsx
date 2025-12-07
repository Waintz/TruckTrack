import { AssignedDriverWrapper } from "../shared/AssignedDriverWrapper";
import { DriverRating } from "./DriverRating/DriverRating";

export function AssignedDriverFooter() {
  return (
    <AssignedDriverWrapper as={"footer"}>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DriverRating />
      </section>
    </AssignedDriverWrapper>
  );
}
