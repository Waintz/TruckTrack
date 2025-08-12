import { Partners } from "@/constants/partners";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  PARTNERS: Partners[];
  className?: string;
}

export function PartnersDesktopSection({ PARTNERS, className }: Props) {
  return (
    <ul className={clsx("hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-y-7 gap-x-10 mt-14 mx-auto w-max", className)}>
      {PARTNERS.map((p) => (
        <li key={p.id} className="w-40 h-10">
          <a target="_blank" rel="noopener noreferrer" href={p.link}>
            <Image
              width={p.width}
              height={p.height}
              alt={p.name}
              src={p.img}
              className="w-full h-full object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
