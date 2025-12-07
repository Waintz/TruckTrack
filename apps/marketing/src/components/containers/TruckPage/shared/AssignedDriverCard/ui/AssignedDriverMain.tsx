import { Target } from "lucide-react";
import { DriverMetrics } from "./DriverMetrics/DriverMetrics";
import { DriverHRCards } from "./DriverHRProfile/DriverHRCards";
import { AssignedDriverWrapper } from "../shared/AssignedDriverWrapper";

export function AssignedDriverMain() {
  return (
    <AssignedDriverWrapper as={"main"}>
      <DriverMetrics />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DriverHRCards />
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-xl flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-800 font-medium">
            Monthly target: 10,000 km —{" "}
            <span className="font-semibold">85%</span> completed!
          </p>
          <p className="text-xs text-blue-500">
            Keep up the pace to earn the bonus!
          </p>
        </div>
        <Target className="w-8 h-8 text-blue-500 opacity-70" />
      </div>
    </AssignedDriverWrapper>
  );
}
