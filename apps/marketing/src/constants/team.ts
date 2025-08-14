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
    image: "/teams/Inkognito.svg",
  },
  {
    name: "Игорь К.",
    role: "Backend Developer",
    image: "/teams/Inkognito.svg",
  },
  {
    name: "Алина С.",
    role: "Project Manager",
    image: "/teams/Inkognito.svg",
  },
];