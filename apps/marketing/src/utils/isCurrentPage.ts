import { getBasePath } from "./getBasePath";

export function isCurrentPage(path: string) {
  return getBasePath(path) == getBasePath(window.location.pathname);
}
