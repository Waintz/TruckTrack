import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PaginationControls({
  className,
  onClickLeft,
  onClickRight,
  disableLeftArrow,
  disableRightArrow,
}: {
  className: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
}) {
  return (
    <div className={clsx("", className)}>
      <button
        disabled={!disableLeftArrow}
        onClick={onClickLeft}
        aria-label="Предыдущая страница"
      >
        <ArrowLeft color={!disableLeftArrow ? "#abb4e3" : "#5878ed"} />
      </button>
      <button
        disabled={!disableRightArrow}
        onClick={onClickRight}
        aria-label="Следующая страница"
      >
        <ArrowRight color={!disableRightArrow ? "#abb4e3" : "#5878ed"} />
      </button>
    </div>
  );
}
