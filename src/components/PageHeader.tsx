import { HERO_TITLE } from "@/constants/texts";

export function PageHeader() {
  return (
    <header className="max-w-2xl px-4 mb-8">
      <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight text-left tracking-tight text-gray-900">
        {HERO_TITLE}
      </h1>
    </header>
  );
}
