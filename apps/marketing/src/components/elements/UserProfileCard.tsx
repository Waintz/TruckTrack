import clsx from "clsx";
import Image from "next/image";

interface Props {
  src: string;
  firstName: string;
  className?: string;
  lastName: string;
  description: string;
}

export function UserProfileCard({
  src,
  description,
  firstName,
  lastName,
  className,
}: Props) {
  return (
    <div className={clsx("flex gap-2", className)}>
      <div className="rounded-[50%] overflow-hidden">
        <Image src={src} width={50} height={50} alt="User avatar" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg">
          {firstName} {lastName}
        </span>
        <span className="opacity-70">{description}</span>
      </div>
    </div>
  );
}
