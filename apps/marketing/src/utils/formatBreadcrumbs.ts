import removeSpaceEncoding from "./removeSpaceEncoding";

export function formatBreadcrumbs(path: string, excludes: string[] = [""]) {
  let preobrazovatel = path.split("/");
  preobrazovatel.shift();

  for (const exclude of excludes) {
    preobrazovatel = preobrazovatel
      .filter((item) => item !== exclude)
      .map((item) => removeSpaceEncoding(item));
  }

  return preobrazovatel;
}
