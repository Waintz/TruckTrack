import clsx from "clsx";

interface IAssignedDriverWrapperProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function AssignedDriverWrapper({
  as: Tag = "section",
  className,
  children,
}: IAssignedDriverWrapperProps) {
  return (
    <Tag
      className={clsx(
        "p-6 bg-white rounded-2xl shadow-sm border border-gray-100",
        className
      )}
    >
      {children}
    </Tag>
  );
}
