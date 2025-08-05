import logoTruck from "@/assets/truck/TruckTrack.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return (
    <Image
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/")}
      priority
      className="w-40"
      alt="Truck Track"
      src={logoTruck}
    />
  );
}
