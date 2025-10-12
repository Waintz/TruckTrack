import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";

export function MobileMenuFooter() {
  return (
    <Button
      text="Заказать звонок"
      variant="outline"
      ariaLabel="Заказать звонок"
      color={COLORS.blue}
      className="w-full"
    />
  );
}
