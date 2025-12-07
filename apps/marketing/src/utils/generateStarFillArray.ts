export function generateStarFillArray({
  maxStar = 5,
  rating,
}: {
  rating: number;
  maxStar?: number;
}): number[] {
  const stars: number[] = [];

  for (let i = 1; i <= maxStar; i++) {
    const diff = rating - i + 1;

    if (diff >= 1) stars.push(1);
    else if (diff > 0) stars.push(Number(diff.toFixed(1)));
    else stars.push(0);
  }

  return stars;
}
