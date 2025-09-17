/**
 * @param time ISO string, e.g. current "2025-09-08T12:00:00Z"
 * @returns delay in minutes
 */

type ReturnsCalculateDelay = {
  delaySeconds: number;
  delayMinutes: number;
  delayHours: number;
};

export function calculateDelay(time: string): ReturnsCalculateDelay {
  const plannedTime = new Date(time);
  const actualDate = new Date();

  const delayMs = actualDate.getTime() - plannedTime.getTime();
  const delaySeconds = Math.floor(delayMs / 1000);
  const delayMinutes = Math.floor(delayMs / 1000 / 60);
  const delayHours = delayMinutes % 60;

  return { delayMinutes: Number(delayMinutes), delayHours, delaySeconds };
}
