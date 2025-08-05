import { highlights } from "@/constants/highlights";
import { CheckCircle } from "./CheckCircle";

export default function HighlightsList() {
  return (
    <ul className="max-w-3xl space-y-3">
      {highlights.map((item, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <CheckCircle className="flex-shrink-0 mt-1 text-[#4A6CF7]" />
          <p className="text-gray-800 font-semibold text-base sm:text-sm lg:text-lg leading-snug">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}
