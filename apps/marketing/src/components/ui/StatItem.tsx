import clsx from "clsx";

export interface IStatItemProps {
  name: string;
  className?: string;
  classNameProgress?: string;
  progress?: {
    completed?: string | number;
    total?: string | number;
  };
  value?: string;
}

export function StatItem({
  name,
  progress,
  value,
  className,
  classNameProgress,
}: IStatItemProps) {
  return (
    <div key={name} className="flex flex-col gap-1">
      <p className={clsx("opacity-60", className)}>{name}</p>
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
        {value && <span className="font-semibold">{value}</span>}
      </div>
    </div>
  );
}
