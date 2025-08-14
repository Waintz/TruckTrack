import {
  HERO_TIME_SAVING_TEXT_BEFORE,
  HERO_TIME_SAVING_HIGHLIGHT,
  HERO_TIME_SAVING_TEXT_AFTER,
} from "@/constants/texts";

export function TimeSaving() {
  return (
    <p className="max-w-3xl text-md lg:text-xl text-gray-700 leading-relaxed mb-7">
      {HERO_TIME_SAVING_TEXT_BEFORE}{" "}
      <span className="text-[#4A6CF7] font-semibold">
        {HERO_TIME_SAVING_HIGHLIGHT}
      </span>
      <span className="block">{HERO_TIME_SAVING_TEXT_AFTER}</span>
    </p>
  );
}
