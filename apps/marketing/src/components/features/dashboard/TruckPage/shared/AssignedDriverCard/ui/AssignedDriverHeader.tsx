import { EmployeeProfileCard } from "@/components/features/dashboard/EmployeeProfileCard/EmployeeProfileCard";
import { AssignedDriverWrapper } from "../shared/AssignedDriverWrapper";

export function AssignedDriverHeader() {
  return (
    <AssignedDriverWrapper as="header">
      <EmployeeProfileCard
        avatar="/teams/Vladislav.svg"
        name="Vladislav Petrov"
        uid="4059-VD"
      />
    </AssignedDriverWrapper>
  );
}
