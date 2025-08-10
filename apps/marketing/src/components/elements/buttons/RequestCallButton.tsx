import clsx from "clsx"

export function RequestCallButton({ className }: { className?: string }) {
  return (
    <button
      className={clsx("border-2 border-[#4A6CF7] text-center hover:border-blue-700 text-[#4A6CF7] hover:text-blue-700 rounded-full px-6 font-semibold transition", className)}
      aria-label="Заказать звонок"
    >
      Заказать звонок
    </button>
  );
}
