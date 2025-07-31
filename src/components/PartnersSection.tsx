import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import wialon from "@/assets/wialon.svg";

export function PartnersSection({className}: {className?: string}) {
  return (
    <section aria-labelledby="partners-heading" className={className}>
        <h2 className="font-bold text-center text-[20px]">
          Наши партнёрские платформы
        </h2>
        <ul className="grid grid-cols-1 gap-y-7 gap-x-10 mt-8 mx-auto w-max ">
          <li>
            <Image alt="1" className="w-35" src={wialon} />
          </li>
          <li>
            <Image alt="1" className="w-35" src={wialon} />
          </li>
          <li>
            <Image alt="1" className="w-35" src={wialon} />
          </li>
          <li>
            <Image alt="1" className="w-35" src={wialon} />
          </li>
        </ul>
        <div className="flex justify-center mt-9 gap-10">
          <button aria-label="Предыдущая страница">
            <ArrowLeft color="#abb4e3" />
          </button>
          <button aria-label="Следующая страница">
            <ArrowRight color="#5878ed" />
          </button>
        </div>
      </section>
  );
}
