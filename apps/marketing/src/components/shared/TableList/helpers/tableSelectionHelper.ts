export interface SelectableItem {
  id: number;
  valueWeight: number;
}

/**
 * Синхронизирует состояние выбранных элементов
 */

export function handleSelectChangeHelper<T extends SelectableItem>(
  packages: T[],
  selectedPackages: number[],
  selectedIds: number[],
  toggle: (payload: { packageId: number; weight: number }) => void
) {
  const allIds = packages.map((p) => p.id);

  allIds.forEach((id) => {
    const pkg = packages.find((x) => x.id === id);
    if (!pkg) return;

    const isCurrentlySelected = selectedPackages.includes(id);
    const willBeSelected = selectedIds.includes(id);

    if (isCurrentlySelected !== willBeSelected) {
      toggle({ packageId: id, weight: pkg.valueWeight });
    }
  });
}

/**
 * Переключает выбор одной строки таблицы
 */
export function toggleSelectRow(
  id: number,
  selectedIds: number[],
  onSelectChange?: (next: number[]) => void
) {
  const isSelected = selectedIds.includes(id);
  const next = isSelected
    ? selectedIds.filter((x) => x !== id)
    : [...selectedIds, id];
  onSelectChange?.(next);
}

/**
 * Переключает выбор всех строк таблицы
 */
export function toggleSelectAllRows<T extends { id: number }>(
  itemsData: T[],
  allSelected: boolean,
  onSelectChange?: (next: number[]) => void
) {
  if (allSelected) {
    onSelectChange?.([]);
  } else {
    const allIds = itemsData.map((row) => row.id);
    onSelectChange?.(allIds);
  }
}
