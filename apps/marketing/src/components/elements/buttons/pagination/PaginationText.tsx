import clsx from "clsx";

interface Props {
  onClick: () => void;
  text?: string;
  className?: string;
}

export function PaginationText({
  onClick,
  text = "Show more",
  className,
}: Props) {
  return (
    <button
      className={clsx("text-purple hover:underline cursor-pointer", className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
