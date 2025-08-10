export function MobileMenuLanguageSelected() {
  return (
    <section>
      <label
        htmlFor="language-select"
        className="block mb-2 text-blue-700 font-semibold"
      >
        Выбор языка
      </label>
      <select
        id="language-select"
        className="w-full border border-blue-600 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
        defaultValue="ru"
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>
    </section>
  );
}
