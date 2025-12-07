import clsx from "clsx";

interface Props {
  title: string;
  renderMoreInformations?: React.ReactNode;
  className?: string;
  classNameTitle?: string;
}

export function LayoutContainerHeaders({
  title,
  renderMoreInformations,
  className,
  classNameTitle,
}: Props) {
  return (
    <header
      className={clsx(
        "flex items-center flex-wrap justify-between sm:gap-5 gap-2",
        className
      )}
    >
      <h1 className={clsx("text-lg xl:text-2xl font-bold", classNameTitle)}>
        {title}
      </h1>
      {renderMoreInformations}
    </header>
  );
}
