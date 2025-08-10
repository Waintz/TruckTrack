import { IHotItWorkSteps } from "@/constants/texts";

interface IProps {
  HOW_IT_WORK_STEPS: IHotItWorkSteps[];
}

export function HowItWorksSteps({ HOW_IT_WORK_STEPS }: IProps) {
  return (
    <ol className="grid gap-10 md:grid-cols-2">
      {HOW_IT_WORK_STEPS.map((step) => (
        <li key={step.number} className="flex items-start gap-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#4A6CF7] text-white text-lg font-bold flex items-center justify-center shadow-md">
            {step.number}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
