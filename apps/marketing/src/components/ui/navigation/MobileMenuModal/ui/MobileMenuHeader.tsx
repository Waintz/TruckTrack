import { CloseButton } from "@/components/elements/buttons/CloseButton";
import { COLORS } from "@/config/colors.config";

export function MobileMenuHeader({ onClose }: { onClose: () => void }) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900">Меню</h2>
      <CloseButton color={COLORS.blue} onClose={onClose} />
    </header>
  );
}
