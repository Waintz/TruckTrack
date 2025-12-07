import { usePathname } from "next/navigation";
import { getBasePath } from "../utils/getBasePath";

export function useIsActiveRoute(path: string) {
  const pathname = usePathname();

  return getBasePath(path) == getBasePath(pathname);
}
