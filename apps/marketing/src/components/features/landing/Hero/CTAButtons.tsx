import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";

export function CTAButtons() {
  return (
    <div className="max-w-3xl flex flex-col gap-6 mt-5">
      <Button variant="primary" ariaLabel="Подключиться" color={COLORS.blue}>
        Подключиться
      </Button>
      <Button variant="outline" ariaLabel="Заказать звонок" color={COLORS.blue}>
        Заказать звонок
      </Button>
    </div>
  );
}
