interface Props {
  Header?: React.ReactNode;
  Navigation?: React.ReactNode;
  Information?: React.ReactNode;
  LanguageSelector?: React.ReactNode;
  Footer?: React.ReactNode;
  onClose?: () => void;
}

export function ModalLayout({
  Header,
  Navigation,
  Information,
  LanguageSelector,
  Footer,
  onClose,
}: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {Header}

        <div className="overflow-y-auto px-6 py-4 flex-1 space-y-8">
          {Navigation}

          {Information}

          {LanguageSelector}
        </div>

        <div className="p-6 border-t border-gray-200">{Footer}</div>
      </div>
    </div>
  );
}
