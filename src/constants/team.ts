import VladislavZ from '@/assets/teams/Vladislav.svg'
import type { StaticImageData } from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string | StaticImageData;
};

export const TEAM: TeamMember[] = [
  {
    name: "Владислав З.",
    role: "Основатель / Frontend Developer",
    image: VladislavZ,
  },
  {
    name: "Мария П.",
    role: "UI/UX Designer",
    image: "/team/maria.png",
  },
  {
    name: "Игорь К.",
    role: "Backend Developer",
    image: "/team/igor.png",
  },
  {
    name: "Алина С.",
    role: "Project Manager",
    image: "/team/alina.png",
  },
];