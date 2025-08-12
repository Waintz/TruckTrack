import { TeamMember } from "@/constants/team";
import Image from "next/image";

interface Props {
  team: TeamMember[];
}

export function TeamList({ team }: Props) {
  return (
    <ul className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
      {team.map((member, index) => (
        <li key={index} className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#4A6CF7] mb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.role}</p>
        </li>
      ))}
    </ul>
  );
}
