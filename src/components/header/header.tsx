import Image from "next/image";
import logoTruck from "@/assets/TruckTrack.svg";
import { MenuIcon } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between container mx-auto p-5 bg-white shadow-2xs sticky top-0 left-0">
      <section className="flex items-center gap-1">
        <Image priority className="w-40" alt="Truck Track" src={logoTruck} />
      </section>
      <section>
        <MenuIcon />
      </section>
    </header>
  );
}
