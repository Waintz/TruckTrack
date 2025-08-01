import logoTruck from "@/assets/truck/TruckTrack.svg";
import Image from "next/image";

export function Logo() {
  return <Image priority className="w-40" alt="Truck Track" src={logoTruck} />;
}
