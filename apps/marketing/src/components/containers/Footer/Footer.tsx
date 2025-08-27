"use client";

import { useRegisterSection } from "@/hooks/useRegisterSection";
import { Logo } from "../../elements/icons/Logo";
import { SocialIcons } from "../../elements/icons/SocialIcons";
import Link from "next/link";
import { PAGES_CONFIG } from "@/config/pages.config";
import { NAVIGATION_SECTION_CONFIG } from "@/constants/texts";

const nameSection = NAVIGATION_SECTION_CONFIG.contacts.nameSection

export function Footer() {
  const setRef = useRegisterSection(nameSection);

  return (
    <footer
      id={nameSection}
      tabIndex={-1}
      ref={setRef}
      className="container mx-auto p-4 mt-15 scroll-mt-header"
    >
      <article className="flex max-w-4xl justify-between">
        <section className="w-1/2 hidden lg:flex lg:flex-col gap-5 ">
          <h1 className="font-semibold">
            <Logo />
          </h1>
          <section>
            <SocialIcons className="flex w-28 gap-3 ml-8" />
          </section>
        </section>
        <section className="hidden lg:block w-1/2">
          <header>
            <h1 className="font-semibold">Навигация</h1>
          </header>
          <section className="flex flex-col gap-1 mt-3 opacity-50">
            <p>Главная</p>
            <p>О компании</p>
            <p>Подключение</p>
            <p>Команда</p>
            <p>Отзывы</p>
            <p>FAQ</p>
          </section>
        </section>
        <section className="w-1/2">
          <header>
            <h1 className="font-semibold">Полезное</h1>
          </header>
          <section className="flex flex-col gap-2 mt-3 opacity-50 w-1/2 md:w-1">
            <Link href={PAGES_CONFIG.TERMS.path}>
              <p>Пользовательское соглашение</p>
            </Link>
            <Link href={PAGES_CONFIG.POLICY.path}>
              <p>Политика конфиденциальности</p>
            </Link>
          </section>
        </section>
        <section className="w-1/2">
          <header>
            <h1 className="font-semibold">Контакты</h1>
          </header>
          <section className="flex flex-col gap-2 mt-3 opacity-50">
            <p>Email: zvlad9923@gmail.com</p>
            <p>Телефон: 093 105 88 88</p>
            <p>Адрес: ул. Плешева. 7ст18 Киев</p>
          </section>
        </section>
      </article>
      <section className="block lg:hidden mt-20">
        <SocialIcons className="flex gap-4" />
      </section>
      <section className="border-t border-black/20 mt-10">
        <h1 className="mt-5 font-bold text-center lg:text-left text-black/25 text-[13px]">
          Copyright &copy; 2025 ООО Truck Track | Все права защищены
        </h1>
      </section>
    </footer>
  );
}
