import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo({width = 150, height = 200}: {width?: number; height?: number}) {
  const router = useRouter();

  return (
    <Image
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/")}
      priority
      alt="Truck Track"
      src="/truck/TruckTrack.svg"
      width={width}
      height={height}
    />
  );
}
