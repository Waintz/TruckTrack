import Image from "next/image";
import Truck from "@/assets/truck/HeroTruckImg.svg";

export function HeroIllustration({ className }: {className?: string}) {
  return <Image alt="truck" className={className} src={Truck} />;
}
