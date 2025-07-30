import { highlights } from "@/constants/highlights";
import { CheckCircle } from "./CheckCircle";

export default function HighlightsList() {
  return (
    <ul className="text-[11px] leading-snug space-y-2">
      {highlights.map((item, idx) => (
        <li key={idx} className="flex font-bold items-start">
          <CheckCircle />
          <span className="ml-3">{item}</span>
        </li>
      ))}
    </ul>
  );
}
