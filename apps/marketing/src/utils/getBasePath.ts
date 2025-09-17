export function getBasePath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  return segments.length > 0 ? `${segments[0]}` : "/";
}
