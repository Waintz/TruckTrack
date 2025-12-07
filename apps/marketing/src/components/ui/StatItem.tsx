import clsx from "clsx";

export interface IStatItemProps {
  title: string;
  className?: string;
  classNameTitle?: string;
  classNameProgress?: string;
  progress?: {
    completed?: string | number;
    total?: string | number;
  };
  value?: string;
  classNameValue?: string;
}

export function StatItem({
  title,
  progress,
  value,
  className,
  classNameTitle,
  classNameProgress,
  classNameValue,
}: IStatItemProps) {
  return (
    <div key={title} className={clsx("flex flex-col gap-1", className)}>
      <p className={clsx("opacity-60 overflow-hidden overflow-ellipsis whitespace-nowrap flex-1", classNameTitle)}>{title}</p>
      <div className="text-md">
        {progress && progress.completed && progress.total && (
          <>
            <span className={clsx("font-semibold", classNameProgress)}>
              {progress?.completed}
            </span>
            <span className={clsx("opacity-50", classNameProgress)}>
              /{progress?.total}
            </span>
          </>
        )}
        {value && (
          <span className={clsx("", classNameValue)}>{value}</span>
        )}
      </div>
    </div>
  );
}
