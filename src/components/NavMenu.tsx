export function NavMenu() {
  return (
    <nav className="hidden lg:flex h-10 items-center" aria-label="Основное меню">
      <ul className="flex gap-5 items-center">
        <li className="cursor-pointer">О нас</li>
        <li className="cursor-pointer">Команда</li>
        <li className="cursor-pointer">Отзывы</li>
        <li className="cursor-pointer">Контакты</li>
      </ul>
    </nav>
  );
}
