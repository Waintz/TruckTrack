import { generateStarFillArray } from "@/utils/generateStarFillArray";
import { Star } from "lucide-react";

export function ProgressBarStar({
  rating,
  maxStar,
}: {
  rating: number;
  maxStar?: number;
}) {
  const stars = generateStarFillArray({ rating, maxStar });

  return (
    <div className="flex">
      {stars.map((fill, index) => {
        const percentFill = 100 - fill * 100;

        return (
          <div className="relative w-6 h-6" key={index}>
            {/* контур */}
            <Star className="text-orange" stroke="currentColor" fill="none" />

            {/* заливка */}
            <Star
              className="absolute top-0 left-0 text-orange"
              fill="currentColor"
              stroke="none"
              style={{
                clipPath: `inset(0 ${percentFill}% 0 0)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
