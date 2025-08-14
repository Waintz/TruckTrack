import { StaticImageData } from "next/image";

export interface ISocialIcons {
  id: number;
  name: string;
  img: string | StaticImageData;
  url: string;
}

export const SOCIAL_ICONS: ISocialIcons[] = [
  {
    id: 1,
    name: "telegram",
    img: "/social/telegram.svg",
    url: "https://t.me/Tackerl",
  },
  {
    id: 2,
    name: "github",
    img: "/social/github.svg",
    url: "https://github.com/Waintz",
  },
  {
    id: 3,
    name: "instagram",
    img: "/social/instagram.svg",
    url: "https://www.instagram.com/vlad_zgonnyk/",
  },
];