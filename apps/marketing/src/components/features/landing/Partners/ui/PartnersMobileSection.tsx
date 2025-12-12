import { Partners } from "@/constants/partners";
import clsx from "clsx";
import Image from "next/image";

export function PartnersMobileSection({
  partnersChunks,
  currentPage,
  className,
}: {
  partnersChunks: Partners[][];
  currentPage: number;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "overflow-hidden w-40 h-[320px] mx-auto mt-14 relative",
        className
      )}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {partnersChunks.map((group, index) => (
          <ul
            key={index}
            className="flex flex-col gap-9 w-40 shrink-0"
            style={{ height: "320px" }}
          >
            {group.map((p) => (
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
        ))}
      </div>
    </div>
  );
}
