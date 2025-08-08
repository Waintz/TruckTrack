import clsx from "clsx"

export function ConnectButton({ className }: { className?: string }) {
  return (
    <button
      className={clsx("bg-[#4A6CF7] hover:bg-blue-700 text-white py-4 rounded-full text-center px-6 font-semibold shadow-md transition", className)}
      aria-label="Подключиться"
    >
      Подключиться
    </button>
  );
}
