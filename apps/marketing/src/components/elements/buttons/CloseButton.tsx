interface Props {
  onClose: () => void;
  color?: string;
}

export function CloseButton({ onClose, color = "black" }: Props) {
  return (
    <button
      onClick={onClose}
      aria-label="Закрыть меню"
      className="text-3xl font-extrabold leading-none hover:text-blue-800 transition-colors cursor-pointer"
      type="button"
      style={{ color: color }}
    >
      ×
    </button>
  );
}
