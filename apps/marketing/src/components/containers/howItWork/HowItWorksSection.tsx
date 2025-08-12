import { HOT_IT_WORK_STEPS } from "@/constants/texts";
import clsx from "clsx";
import { HowItWorksSteps } from "./ui/HowItWorksSteps";

export function HowItWorksSection({ className }: { className?: string }) {
  return (
    <section className={clsx("px-4", className)}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Как подключиться к <span className="text-[#4A6CF7]">TruckTrack</span>
        </h2>

        <HowItWorksSteps HOW_IT_WORK_STEPS={HOT_IT_WORK_STEPS} />
      </div>
    </section>
  );
}
