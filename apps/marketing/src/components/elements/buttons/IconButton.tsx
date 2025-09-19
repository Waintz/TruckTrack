import clsx from "clsx";
import Image from "next/image";

interface Props {
  onClick?: () => void;
  className?: string;
  icon: string;
  nameIcon?: string;
  size?: number;
}

export function IconButton({
  onClick,
  className,
  icon,
  size = 30,
  nameIcon = "click",
}: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-ghost-white p-3 rounded-full flex items-center justify-center",
        className
      )}
    >
      <Image src={icon} alt={nameIcon} width={size} height={size} />
    </div>
  );
}
