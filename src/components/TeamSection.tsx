import { TEAM } from "@/constants/team";
import { useRegisterSection } from "@/hooks/useRegisterSection";
import clsx from "clsx";
import Image from "next/image";

export function TeamSection({ className }: { className?: string }) {
    const setRef = useRegisterSection("team");

  return (
    <section ref={setRef} className={clsx("px-4 max-w-6xl mx-auto scroll-mt-header", className)}>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Наша команда
      </h2>
      <ul className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {TEAM.map((member, index) => (
          <li key={index} className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#4A6CF7] mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
