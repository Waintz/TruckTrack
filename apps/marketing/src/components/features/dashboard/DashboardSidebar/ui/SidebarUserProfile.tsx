import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { UserProfileCard } from "@/components/elements/UserProfileCard";

export function SidebarUserProfile() {
  return (
    <div className="mt-5 mb-5 flex justify-between items-center px-2">
      <UserProfileCard
        description="Admin"
        firstName="John"
        lastName="Dillinger"
        src="/images.jpg"
      />
      <div className="opacity-50">
        <Ellipsis className="cursor-pointer" />
      </div>
    </div>
  );
}
