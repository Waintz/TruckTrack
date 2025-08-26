import clsx from "clsx";
import React, { ElementType, FC } from "react";

interface SurfaceProps {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}

export const Surface: FC<SurfaceProps> = ({
  as: Tag = "section",
  children,
  className,
}) => {
  return (
    <Tag
      className={clsx("bg-white p-5 rounded-2xl md:px-10 md:py-6", className)}
    >
      {children}
    </Tag>
  );
};
