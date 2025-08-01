import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PaginationControls({ className }: { className: string }) {
  return (
    <div className={clsx('', className)}>
      <button aria-label="Предыдущая страница">
        <ArrowLeft color="#abb4e3" />
      </button>
      <button aria-label="Следующая страница">
        <ArrowRight color="#5878ed" />
      </button>
    </div>
  );
}
