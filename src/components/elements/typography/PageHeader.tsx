import { HERO_TITLE } from "@/constants/texts";

export function PageHeader() {
  return (
    <header className="max-w-[350px] md:min-w-[350px] lg:max-w-xl mb-8">
      <h1 className="font-semibold text-[30px] md:text-3xl lg:text-[44px] xl:text-5xl leading-tight text-left tracking-tight text-gray-900">
        {HERO_TITLE}
      </h1>
    </header>
  );
}
