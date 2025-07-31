import Image from "next/image";
import telegram from '@/assets/telegram.svg'
import youtube from '@/assets/youtube.svg'
import instagram from '@/assets/instagram.svg'

export function Footer() {
  return (
    <footer className="container mx-auto p-4 mt-15">
      <article className="flex justify-between">
        <section className="w-1/2">
          <header>
            <h1 className="font-bold">Навигация</h1>
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
            <h1 className="font-bold">Контакты</h1>
          </header>
          <section className="flex flex-col gap-1 mt-3 opacity-50">
            <p>Email: zvlad9923@gmail.com</p>
            <p>Телефон: 093 105 88 88</p>
            <p>Адрес: ул. Плешева. 7ст18 Киев</p>
          </section>
        </section>
      </article>
      <section className="mt-20 flex gap-5">
        <Image alt="telegram" src={telegram} width='35' height='35' />
        <Image alt="youtube" src={youtube} width='35' height='35' />
        <Image alt="instagram" src={instagram} width='35' height='35' />
      </section>
      <section className="border-t border-black/20 mt-5">
        <h1 className="mt-5 font-bold text-center text-black/20 text-[13px]">
          Copyright &copy; 2025 ООО Truck Track | Все права защищены
        </h1>
      </section>
    </footer>
  );
}
