import clsx from "clsx";
import React, { ElementType, FC } from "react";

interface SurfaceProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Surface: FC<SurfaceProps> = ({
  as: Tag = "section",
  onClick,
  children,
  className,
}) => {
  return (
    <Tag onClick={onClick} className={clsx("bg-white rounded-2xl", className)}>
      {children}
    </Tag>
  );
};
