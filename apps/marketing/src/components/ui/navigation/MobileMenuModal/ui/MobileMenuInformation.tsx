import { INavigationSectionItem } from "@/constants/texts";

export function MobileMenuInformation({
  InformationMenu,
  onClose,
  scrollToSection,
}: {
  InformationMenu: INavigationSectionItem[];
  onClose?: () => void;
  scrollToSection?: (section: string) => void;
}) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Справка и информация
      </h3>
      <nav>
        <ul className="flex flex-col gap-3 text-lg text-gray-700 font-medium">
          {InformationMenu.map(({ name, nameSection }) => (
            <li
              onClick={() => {
                scrollToSection?.(nameSection);
                onClose?.();
              }}
              key={nameSection}
              className="cursor-pointer rounded-md px-2 py-1 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
