import wialon from '@/assets/partners/wialon.svg'
import guartam from '@/assets/partners/guartam.svg'
import samsara from '@/assets/partners/samsara.svg'
import tracktik from '@/assets/partners/tracktik.svg'
import traccar from '@/assets/partners/traccar.svg'
import navixy from '@/assets/partners/navixy.svg'
import zubie from '@/assets/partners/zubie.svg'
import linxup from '@/assets/partners/linxup.svg'

export type Partners = {
  id: number;
  name: string;
  img: string;
}

export const PARTNERS: Partners[] = [
  {
    id: 1,
    name: 'Wialon',
    img: wialon
  },
  {
    id: 2,
    name: 'Guartam',
    img: guartam
  },
  {
    id: 3,
    name: 'Guartam',
    img: samsara
  },
  {
    id: 4,
    name: 'Guartam',
    img: tracktik
  },
  {
    id: 5,
    name: 'Guartam',
    img: navixy
  },
  {
    id: 6,
    name: 'Guartam',
    img: traccar
  },
  {
    id: 7,
    name: 'zubie',
    img: zubie
  },
  {
    id: 8,
    name: 'linxup',
    img: linxup
  },
]