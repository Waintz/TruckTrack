import { CloseButton } from "@/components/elements/buttons/CloseButton";
import { COLORS } from "@/config/colors.config";

interface Props {
  Header?: React.ReactNode;
  HeaderTitle?: string;
  children?: React.ReactNode;
  Footer?: React.ReactNode;
  onClose: () => void;
}

export function ModalLayout({
  Header,
  children,
  Footer,
  onClose,
  HeaderTitle,
}: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-40 p-4 sm:p-5"
      onClick={onClose}
    >
      <div
        className="
      bg-white rounded-lg shadow-lg
      w-full max-w-4xl
      h-[90vh] sm:h-auto sm:max-h-[80vh] xl:max-h-[60vh]
      flex flex-col
      mx-2 sm:mx-0
    "
        onClick={(e) => e.stopPropagation()}
      >
        {Header ? (
          Header
        ) : (
          <header className="px-6 py-4 border-b border-gray-200 flex items-center font-semibold text-xl justify-between">
            <h1>{HeaderTitle || "Меню"}</h1>
            <CloseButton color={COLORS.purple} onClose={onClose} />
          </header>
        )}

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 custom-scroll">
          {children}
        </div>

        {Footer && <div className="p-6 border-t border-gray-200">{Footer}</div>}
      </div>
    </div>
  );
}
