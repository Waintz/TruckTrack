import Image from "next/image";

export function HeroIllustration({
  className,
  width,
  height,
}: {
  className?: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      alt="truck"
      width={width}
      height={height}
      className={className}
      src="/truck/HeroTruckImg.svg"
    />
  );
}
