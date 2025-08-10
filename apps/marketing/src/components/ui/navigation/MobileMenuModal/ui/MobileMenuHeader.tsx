export function MobileMenuHeader({ onClose }: { onClose: () => void }) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900">Меню</h2>
      <button
        onClick={onClose}
        aria-label="Закрыть меню"
        className="text-3xl font-extrabold leading-none text-blue-600 hover:text-blue-800 transition-colors"
        type="button"
      >
        ×
      </button>
    </header>
  );
}
