export type SectionKey =
  | "about"
  | "team"
  | "testimonials"
  | "contacts"
  | "support"
  | "pricing"
  | "terms";

export interface INavigationSectionItem {
  name: string;
  nameSection: SectionKey;
}

export const NAVIGATION_SECTION_CONFIG: Record<
  SectionKey,
  INavigationSectionItem
> = {
  about: { name: "О сервисе", nameSection: "about" },
  team: { name: "Команда", nameSection: "team" },
  testimonials: { name: "Отзывы", nameSection: "testimonials" },
  contacts: { name: "Контакты", nameSection: "contacts" },
  support: { name: "Поддержка / Помощь", nameSection: "support" },
  pricing: { name: "Тарифы", nameSection: "pricing" },
  terms: { name: "Условия использования", nameSection: "terms" },
};

// HEADER NAV MENU
export const HEADER_NAVIGATION_MENU: INavigationSectionItem[] = [
  NAVIGATION_SECTION_CONFIG.about,
  NAVIGATION_SECTION_CONFIG.team,
  NAVIGATION_SECTION_CONFIG.testimonials,
  NAVIGATION_SECTION_CONFIG.contacts,
];

// Основная навигация мобильного меню
export const MOBILE_MENU_NAVIGATION: INavigationSectionItem[] = [
  NAVIGATION_SECTION_CONFIG.about,
  NAVIGATION_SECTION_CONFIG.team,
  NAVIGATION_SECTION_CONFIG.testimonials,
  NAVIGATION_SECTION_CONFIG.contacts,
];

// Информационный блок мобильного меню
export const MOBILE_MENU_INFORMATION: INavigationSectionItem[] = [
  NAVIGATION_SECTION_CONFIG.support,
  NAVIGATION_SECTION_CONFIG.about,
  NAVIGATION_SECTION_CONFIG.pricing,
  NAVIGATION_SECTION_CONFIG.terms,
];