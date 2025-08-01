import Image from "next/image";
import Truck from "@/assets/truck/HeroTruckImg.svg";

export function HeroIllustration() {
  return <Image alt="truck" className="w-125" src={Truck} />;
}
