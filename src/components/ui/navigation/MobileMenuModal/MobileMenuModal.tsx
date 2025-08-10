import {
  MOBILE_MENU_INFORMATION,
  MOBILE_MENU_NAVIGATION,
} from "@/constants/texts";
import { useScroll } from "@/providers/ScrollContext";
import { MobileMenuHeader } from "./ui/MobileMenuHeader";
import { MobileMenuNavigation } from "./ui/MobileMenuNavigation";
import { MobileMenuInformation } from "./ui/MobileMenuInformation";
import { MobileMenuLanguageSelected } from "./ui/MobileMenuLanguageSelected";
import { ModalLayout } from "./ModalLayout";
import { MobileMenuFooter } from "./ui/MobileMenuFooter";

interface IProps {
  onClose: () => void;
}

export function MobileMenuModal({ onClose }: IProps) {
  const { scrollToSection } = useScroll();

  return (
    <ModalLayout
      Header={<MobileMenuHeader onClose={onClose} />}
      Navigation={
        <MobileMenuNavigation
          NavigationMenu={MOBILE_MENU_NAVIGATION}
          onClose={onClose}
          scrollToSection={scrollToSection}
        />
      }
      Information={
        <MobileMenuInformation InformationMenu={MOBILE_MENU_INFORMATION} />
      }
      LanguageSelector={<MobileMenuLanguageSelected />}
      Footer={<MobileMenuFooter />}
      onClose={onClose}
    />
  );
}
