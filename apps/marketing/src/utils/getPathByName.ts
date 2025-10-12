interface PageNode {
  path: string | ((param?: string) => string);
  name: string | ((param?: string) => string);
  children?: Record<string, PageNode>;
}

export function getPathByName(
  arr: Record<string, PageNode>,
  current: string,
  param?: string
): string {
  let path = "";

  const queue = Object.values(arr);

  while (queue.length > 0) {
    const node = queue.shift()!;

    const nodeName = typeof node.name === "function" ? node.name() : node.name;

    if (nodeName.toLowerCase() == current.toLowerCase()) {
      path = typeof node.path === "function" ? node.path(param) : node.path;
      break;
    }

    if (node.children) {
      queue.push(...Object.values(node.children));
    }
  }

  return path;
}
