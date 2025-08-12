import Image from "next/image";
import { SOCIAL_ICONS } from "@/constants/texts";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export function SocialIcons({ className, height = 35, width = 35 }: Props) {
  return (
    <ul className={className}>
      {SOCIAL_ICONS.map((e) => {
        return (
          <li key={e.id}>
            <a href={e.url} target="_blank" rel="noopener noreferrer">
              <Image alt={e.name} src={e.img} width={width} height={height} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
