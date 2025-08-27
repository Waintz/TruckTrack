import { SERVICE_TAGLINE } from "@/constants/texts";

export function ServiceIntroHeader() {
  return (
    <header>
      <h1 className="font-extrabold text-4xl md:text-5xl relative inline-block mb-6">
        Truck
        <span className="text-blue relative ml-2">
          Track
          <span className="absolute -bottom-1 left-0 w-full h-1 rounded bg-blue"></span>
        </span>
      </h1>
      <h3 className="text-gray-700 text-lg md:text-xl lg:w-3/4 leading-relaxed max-w-3xl mb-12">
        {SERVICE_TAGLINE}
      </h3>
    </header>
  );
}
