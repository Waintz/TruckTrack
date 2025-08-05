import Image from "next/image";
import telegram from '@/assets/telegram.svg'
import youtube from '@/assets/youtube.svg'
import instagram from '@/assets/instagram.svg'

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

export function SocialIcons({className, height = 35, width = 35}: Props) {
  return (
    <ul className={className}>
      <li>
        <Image alt="telegram" src={telegram} width={width} height={height} />
      </li>
      <li>
        <Image alt="youtube" src={youtube} width={width} height={height} />
      </li>
      <li>
        <Image alt="instagram" src={instagram} width={width} height={height} />
      </li>
    </ul>
  );
}
