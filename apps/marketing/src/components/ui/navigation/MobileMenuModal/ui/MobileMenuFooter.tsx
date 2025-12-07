import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";

export function MobileMenuFooter() {
  return (
    <Button
      variant="outline"
      ariaLabel="Заказать звонок"
      color={COLORS.blue}
      className="w-full"
    >Заказать звонок</Button>
  );
}
