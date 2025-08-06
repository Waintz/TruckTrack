// HERO SECTION -------------------------------------------------- //
import telegram from '@/assets/social/telegram.svg'
import github from '@/assets/social/github.svg'
import instagram from '@/assets/social/instagram.svg'
import { StaticImageData } from "next/image";

export const HERO_TITLE =
  "TruckTrack — контроль фур и загрузки в реальном времени";

// Текст с частью, которую нужно выделить стилем
export const HERO_TIME_SAVING_TEXT_BEFORE = "Экономия времени до ";
export const HERO_TIME_SAVING_HIGHLIGHT = "65%";
export const HERO_TIME_SAVING_TEXT_AFTER =
  " в логистике и контроле грузоперевозок";

// ServiceIntro SECTION ------------------------------------------- //

export const SERVICE_TAGLINE =
  "Прозрачная логистика в реальном времени без переплат. Ваши клиенты и партнёры видят перемещение грузов и статусы доставки напрямую стрекеров с подтверждением данных участниками цепочки.";

// FAQ SECTION ---------------------------------------------------- //

export type FaqQuestions = {
  question: string;
  answer: string;
}

export const FAQ_TITLE = "Часто задаваемые вопросы";

export const FAQ_QUESTIONS: FaqQuestions[] = [
  {
    question: "Как происходит отслеживание фур?",
    answer:
      "Система отображает местоположение фуры в реальном времени на основе GPS-данных, передаваемых с трекеров. Обновления происходят автоматически.",
  },
  {
    question: "Как часто обновляются статусы загрузки?",
    answer:
      "Информация о загрузке обновляется в зависимости от активности склада и водителя. Обычно это происходит при начале, окончании или подтверждении погрузки.",
  },
  {
    question: "Почему сервис бесплатный для водителей?",
    answer:
      "TruckTrack ориентирован на компании. Водители получают доступ к сервису без дополнительной комиссии — все расходы покрывает логистическая сторона.",
  },
  {
    question: "Что влияет на статус фуры?",
    answer:
      "На статус влияет текущее местоположение, этап доставки (в пути, загружается, разгружается), а также данные, передаваемые со склада или от водителя.",
  },
  {
    question: "С кем интегрируется TruckTrack?",
    answer:
      "Сервис можно интегрировать с корпоративными ERP-системами, а также с трекерами GPS/ГЛОНАСС различных производителей.",
  },
  {
    question: "Как сообщить о проблеме?",
    answer:
      "Водитель или диспетчер может вручную изменить статус в личном кабинете, а также оставить комментарий — всё отображается в системе мгновенно.",
  },
];


// TESTIMONIALS

export interface ITestimonial {
  name: string;
  company: string;
  text: string;
}

export const TESTIMONIALS: ITestimonial[] = [
  {
    name: "Александр Романов",
    company: "ООО «ГрузТранс»",
    text: "TruckTrack полностью изменил наш подход к логистике. Теперь мы видим все перемещения фур в реальном времени, и это значительно снизило количество звонков от клиентов.",
  },
  {
    name: "Мария Литвинова",
    company: "ИП «ЛитКарго»",
    text: "Очень удобно! Наши заказчики сами отслеживают доставку и загрузку — больше нет необходимости держать отдельного менеджера под отчёты.",
  },
  {
    name: "Игорь Савчук",
    company: "ТК «ПрофЛогистика»",
    text: "Отличный инструмент. Особенно ценим прозрачность — теперь каждый этап доставки виден как нам, так и партнёрам. Надёжность на высоте.",
  },
  {
    name: "Екатерина Смирнова",
    company: "CargoFast",
    text: "После внедрения TruckTrack количество спорных ситуаций с клиентами упало почти до нуля. Все видят статусы, всё фиксируется. Рекомендуем!",
  },
];

// HEADER NAV MENU

export type HeaderNav = {
  name: string;
  nameSection: string;
};

export const HEADER_NAV_MENU: HeaderNav[] = [
  {
    name: 'О сервисе',
    nameSection: 'about'
  },
  {
    name: 'Команда',
    nameSection: 'team'
  },
  {
    name: 'Отзывы',
    nameSection: 'testimonials'
  },
  {
    name: 'Контакты',
    nameSection: 'contacts'
  },
  
]

// SOCIAL ICONS

export interface ISocialIcons {
  id: number;
  name: string;
  img: string | StaticImageData;
  url: string;
} 

export const SOCIAL_ICONS: ISocialIcons[] = [
  {
    id: 1,
    name: 'telegram',
    img: telegram,
    url: 'https://t.me/Tackerl'
  },
  {
    id: 2,
    name: 'github',
    img: github,
    url: 'https://github.com/Waintz'
  },
  {
    id: 3,
    name: 'instagram',
    img: instagram,
    url: 'https://www.instagram.com/vlad_zgonnyk/'
  }
]