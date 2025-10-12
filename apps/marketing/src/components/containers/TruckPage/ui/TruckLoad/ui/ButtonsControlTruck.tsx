import clsx from "clsx";

interface Props {
  renderButton: React.ReactNode;
  renderSelectButton: React.ReactNode;
  className?: string;
}

export function ButtonsControlTruck({
  renderButton,
  renderSelectButton,
  className,
}: Props) {
  return (
    <>
      <div className="hidden md:block">
        <section className={clsx("", className, "")}>{renderButton}</section>
      </div>
      <div className="md:hidden">{renderSelectButton}</div>
    </>
  );
}
