import { CallDriverButton } from "@/components/elements/buttons/CallDriverButton";
import { UserProfileCard } from "@/components/elements/UserProfileCard";
import { DrawerLayout } from "@/components/ui/layouts/DrawerLayout";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface DelayedDeliveryDrawerModalProps {
  onClick?: () => void;
  truckId: number;
}

export function DelayedDeliveryDrawerModal({
  onClick,
  truckId,
}: DelayedDeliveryDrawerModalProps) {
  return (
    <DrawerLayout
      onClose={onClick}
      className="w-125 px-8 pt-12 pb-1"
      position="right"
    >
      <article className="mt-10 text-dark-blue">
        <header>
          <p className="font-bold text-2xl">
            <span>Valencia - Barcelona, </span>
            <span>B435324</span>
          </p>
        </header>
        <section className="mt-7 flex justify-between">
          <div>
            <p className="font-bold opacity-50">Departure data</p>
            <p className="font-bold opacity-65">18 Jun, 8:00 AM</p>
          </div>
          <div>
            <p className="font-bold opacity-50">Arrival date</p>
            <p className="font-bold opacity-65">15 Jun, 10:05 AM</p>
          </div>
          <div>
            <p className="font-bold opacity-50">Time delay</p>
            <p className="text-red font-bold opacity-65">2:05 h</p>
          </div>
        </section>
        <section className="relative w-full h-50 mt-6">
          <Image
            src="/Track_AB.svg"
            alt="A-B"
            fill
            style={{ objectFit: "contain" }}
          />
        </section>
        <section className="mt-5 flex items-center justify-between">
          <UserProfileCard
            description="Driver"
            firstName="Vasyan"
            lastName="Mercedes"
            src="/images.jpg"
          />
          <span className="bg-ghost-white p-2 cursor-pointer rounded-2xl">
            <MessageCircle className="text-purple" />
          </span>
        </section>
        <section
          className="mt-5 bg-ghost-white w-full p-7 rounded-lg flex flex-col gap-3 
             max-h-80 min-h-10 overflow-y-auto"
        >
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-2 opacity-80 mt-1">
              <span className="w-4 h-4 border-3 rounded-full border-purple block"></span>
              <span className="w-0.5 h-8 bg-purple block"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Arrived</span>
              <span className="text-sm opacity-50">On way...</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-2 opacity-80 mt-1">
              <span className="w-4 h-4 rounded-full bg-green block"></span>
              <span className="w-0.5 h-8 bg-green block"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Shipped from Madrid</span>
              <span className="text-sm opacity-50">13 Jun, 8:00 AM</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-2 opacity-80 mt-1">
              <span className="w-4 h-4 rounded-full bg-green block"></span>
              <span className="w-0.5 h-8 bg-green block"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Shipped from Madrid</span>
              <span className="text-sm opacity-50">13 Jun, 8:00 AM</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-2 opacity-80 mt-1">
              <span className="w-4 h-4 rounded-full bg-green block"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Shipped from Madrid</span>
              <span className="text-sm opacity-50">13 Jun, 8:00 AM</span>
            </div>
          </div>
        </section>
        <CallDriverButton className="w-full justify-center py-4" />
      </article>
    </DrawerLayout>
  );
}
