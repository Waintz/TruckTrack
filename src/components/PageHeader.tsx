import { HERO_TITLE } from "@/constants/texts";

export function PageHeader() {
  return (
    <header>
      <h1 className="font-bold font-sans text-[24px] leading-snug space-y-2">
        {HERO_TITLE}
      </h1>
    </header>
  );
}
