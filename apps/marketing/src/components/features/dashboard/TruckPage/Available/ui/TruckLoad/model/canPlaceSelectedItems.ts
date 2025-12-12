interface ICanPlaceSelectedItemsProps {
  selectedTotalWeight: number;
  cellCapacity: number;
}

export function canPlaceSelectedItems({
  selectedTotalWeight,
  cellCapacity,
}: ICanPlaceSelectedItemsProps): boolean {
  if (selectedTotalWeight === 0) return false;

  return selectedTotalWeight <= cellCapacity;
}
