interface CardListProps<T> {
  items: T[];
  visibleCount?: number;
  renderItem: (item: T) => React.ReactNode;
}

export function CardList<T>({
  items,
  renderItem,
  visibleCount,
}: CardListProps<T>) {
  const limitedItems = visibleCount ? items.slice(0, visibleCount) : items;

  return <div className="space-y-2">{limitedItems.map(renderItem)}</div>;
}
