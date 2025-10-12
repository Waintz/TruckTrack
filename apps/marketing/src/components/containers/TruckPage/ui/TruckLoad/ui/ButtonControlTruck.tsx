import { Button } from "@/components/ui/button/Button";
import { COLORS } from "@/config/colors.config";

interface Props {
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
  text?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function ButtonControlTruck({
  text = "",
  iconAfter,
  iconBefore,
  ariaLabel,
  onClick,
}: Props) {
  return (
    <>
      <Button
        text={
          <>
            {iconBefore}
            {text}
            {iconAfter}
          </>
        }
        colorText={COLORS.purple}
        variant="primary"
        color={COLORS.ghostWhite}
        ariaLabel={ariaLabel}
        onClick={onClick}
        className="p-3 w-full rounded-md shadow-none text-center flex items-center justify-center font-bold text-lg"
      />
    </>
  );
}
