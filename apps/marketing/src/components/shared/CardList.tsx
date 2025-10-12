import clsx from "clsx";

interface CardListProps<T> {
  items: T[];
  className?: string;
  visibleCount?: number;
  renderItem: (item: T) => React.ReactNode;
}

export function CardList<T>({
  items,
  renderItem,
  className,
  visibleCount,
}: CardListProps<T>) {
  const limitedItems = visibleCount ? items.slice(0, visibleCount) : items;

  return (
    <div className={clsx("space-y-2", className)}>
      {limitedItems.map(renderItem)}
    </div>
  );
}
