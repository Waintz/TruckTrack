"use client";

import { useState } from "react";
import { ClientsCard } from "./ui/ClientsCard";
import clsx from "clsx";
import { CompanyInformation } from "./ui/CompanyInformation/CompanyInformation";
import type { ICompanyInformation } from "./types/company";


export type ClientsInformation = {
  id: number;
  businessEntityType: string;
  avatarUrl: string;
  name: string;
  surname: string;
  numberOfOrders: number;
};

const clients: ClientsInformation[] = [
  {
    id: 1,
    businessEntityType: "ООО Тов.",
    name: "Vladislav",
    surname: "Zghonnyk",
    numberOfOrders: 10,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 2,
    businessEntityType: "ООО Альтаир",
    name: "Mikhail",
    surname: "Petrov",
    numberOfOrders: 7,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 3,
    businessEntityType: "ЧП Вега",
    name: "Anna",
    surname: "Ivanova",
    numberOfOrders: 3,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 4,
    businessEntityType: "ООО Арис",
    name: "Dmitry",
    surname: "Sokolov",
    numberOfOrders: 15,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 5,
    businessEntityType: "ИП Сфера",
    name: "Elena",
    surname: "Morozova",
    numberOfOrders: 5,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 6,
    businessEntityType: "ООО ТехноСтрой",
    name: "Sergey",
    surname: "Kuznetsov",
    numberOfOrders: 22,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 7,
    businessEntityType: "ЧП Сапфир",
    name: "Natalia",
    surname: "Orlova",
    numberOfOrders: 8,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 8,
    businessEntityType: "ООО Галактика",
    name: "Roman",
    surname: "Volkov",
    numberOfOrders: 4,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 9,
    businessEntityType: "ООО ЭнергоСервис",
    name: "Oleg",
    surname: "Smirnov",
    numberOfOrders: 18,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 10,
    businessEntityType: "ИП МаркетПлюс",
    name: "Maria",
    surname: "Karpova",
    numberOfOrders: 12,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 11,
    businessEntityType: "ООО Рубин",
    name: "Alexey",
    surname: "Lebedev",
    numberOfOrders: 9,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 12,
    businessEntityType: "ООО Кристалл",
    name: "Olga",
    surname: "Nikolaeva",
    numberOfOrders: 6,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 13,
    businessEntityType: "ИП Прима",
    name: "Igor",
    surname: "Kolesnikov",
    numberOfOrders: 2,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 14,
    businessEntityType: "ООО Вектор",
    name: "Tatiana",
    surname: "Stepanova",
    numberOfOrders: 17,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 15,
    businessEntityType: "ЧП Олимп",
    name: "Pavel",
    surname: "Belov",
    numberOfOrders: 11,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 16,
    businessEntityType: "ООО Сириус",
    name: "Daria",
    surname: "Antonova",
    numberOfOrders: 20,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 17,
    businessEntityType: "ООО ПромИнвест",
    name: "Nikolay",
    surname: "Gusev",
    numberOfOrders: 14,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 18,
    businessEntityType: "ИП Лайм",
    name: "Ekaterina",
    surname: "Vasilieva",
    numberOfOrders: 1,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 19,
    businessEntityType: "ООО Неон",
    name: "Konstantin",
    surname: "Frolov",
    numberOfOrders: 19,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 20,
    businessEntityType: "ООО Астра",
    name: "Yulia",
    surname: "Popova",
    numberOfOrders: 13,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
  {
    id: 21,
    businessEntityType: "ИП СМТ",
    name: "Andrey",
    surname: "Makarov",
    numberOfOrders: 16,
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJ2DEkKlcYX7FaAhzEDG8NBhw_eRJwlNVjA&s",
  },
];

const company: ICompanyInformation = {
  id: "cmp_001",
  name: "ООО Альтаир Групп",
  description:
    "Компания, занимающаяся поставками промышленного оборудования и сервисным обслуживанием.",
  website: "https://altair-group.example.com",
  address: "г. Киев, ул. Промышленная, 12",
  phone: "+38 (044) 123-45-67",
  email: "info@altair-group.example.com",
  logoUrl: "https://truck-track-chi.vercel.app/test/logo-clients.png",
  taxId: "1234567890",
  foundedYear: 2014,
  isActive: true,
};

export function DashboardClientsView() {
  const [view, setView] = useState<"grid" | "list">("list");

  return (
    <>
      <article className="p-4 flex gap-4">
        <section
          className={clsx(
            "w-full lg:w-2/3",
            view === "grid"
              ? "grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]"
              : "flex flex-col gap-4"
          )}
        >
          {clients.map((client, index) => (
            <ClientsCard key={index} view={view} {...client} />
          ))}
        </section>
        <section className="hidden lg:block lg:w-1/3">
          <CompanyInformation {...company} />
        </section>
      </article>
    </>
  );
}
