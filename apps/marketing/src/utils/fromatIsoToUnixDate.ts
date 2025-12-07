export function fromatIsoToUnixDate(isoDate: string): number {
  const date = new Date(isoDate);
  return Math.floor(date.getTime() / 1000);
}
