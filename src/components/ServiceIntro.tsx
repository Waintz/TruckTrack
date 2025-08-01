import clsx from "clsx";
import truck from "@/assets/truck/DrivenByInsight.svg";
import Image from "next/image";
import { ApprovalCard } from "./ApprovalCard";
import { SERVICE_TAGLINE } from "@/constants/texts";

export function ServiceIntro({ className }: { className?: string }) {
  return (
    <section
      className={clsx("mt-20 px-4 lg:flex lg:justify-around", className)}
    >
      <section>
        <h1 className="font-extrabold text-4xl md:text-5xl relative inline-block mb-6">
          Truck
          <span className="text-[#4A6CF7] relative ml-2">
            Track
            <span className="absolute -bottom-1 left-0 w-full h-1 rounded bg-[#4A6CF7]"></span>
          </span>
        </h1>
        <h3 className="text-gray-700 text-lg md:text-xl lg:w-3/4 leading-relaxed max-w-3xl mb-12">
          {SERVICE_TAGLINE}
        </h3>

        <div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-2 -mx-4 px-4">
          <ApprovalCard
            title="Один партнёр"
            percent="10–40%"
            description="Процент одобрения заявок"
          />
          <ApprovalCard
            title="Несколько партнёров"
            percent="до 85%"
            description="Процент одобрения возрастает"
          />
        </div>
      </section>
      <section className="hidden lg:block">
        <Image className="w-120" src={truck} alt="test" />
      </section>
    </section>
  );
}
