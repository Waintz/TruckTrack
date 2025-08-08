import type { StaticImageData } from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  image: string | StaticImageData;
};

export const TEAM: TeamMember[] = [
  {
    name: "Владислав З.",
    role: "Основатель / Frontend Developer",
    image: "/teams/Vladislav.svg",
  },
  {
    name: "Мария П.",
    role: "UI/UX Designer",
    image: "/teams/maria.png",
  },
  {
    name: "Игорь К.",
    role: "Backend Developer",
    image: "/teams/igor.png",
  },
  {
    name: "Алина С.",
    role: "Project Manager",
    image: "/teams/alina.png",
  },
];