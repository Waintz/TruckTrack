import { HOT_IT_WORK_STEPS } from "@/constants/texts";
import clsx from "clsx";

export function HowItWorksSection({ className }: { className?: string }) {
  return (
    <section className={clsx("px-4", className)}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Как подключиться к <span className="text-[#4A6CF7]">TruckTrack</span>
        </h2>

        <ol className="grid gap-10 md:grid-cols-2">
          {HOT_IT_WORK_STEPS.map((step) => (
            <li key={step.number} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#4A6CF7] text-white text-lg font-bold flex items-center justify-center shadow-md">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
