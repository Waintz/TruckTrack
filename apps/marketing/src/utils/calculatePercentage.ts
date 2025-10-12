export function calculatePercentage({
  total,
  usage,
}: {
  total: number;
  usage: number;
}) {
  return (usage / total) * 100;
}
