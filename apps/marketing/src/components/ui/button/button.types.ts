import { ColorsValue } from "@/config/colors.config";

export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "danger"
  | "warning"
  | "success";

interface BaseProps {
  children: React.ReactNode;
  ariaLabel?: string;
  paddingY?: number;
  colorText?: ColorsValue;
  paddingX?: number;
  onClick?: () => void;
  className?: string;
}

export interface PrimaryProps extends BaseProps {
  variant: "primary";
  color?: ColorsValue;
}

export interface OutlineProps extends BaseProps {
  variant: "outline";
  color?: ColorsValue;
}
export interface DefaultProps extends BaseProps {
  variant: "default";
  color?: ColorsValue;
}

export type ButtonProps = PrimaryProps | OutlineProps | DefaultProps;

//   ButtonVariant типы и их дизайн:

// default - обычная кнопка, нейтральный серый цвет, для второстепенных действий

// primary - основная кнопка, яркий акцентный цвет, для главного действия на странице

// secondary - второстепенная кнопка, менее заметная чем primary, для дополнительных действий

// outline - контурная кнопка, прозрачный фон с обводкой, для менее важных действий

// ghost - призрачная кнопка, почти невидимая пока не наведешь, для действий которые не должны привлекать внимание

// link - выглядит как ссылка, для действий которые ведут куда-то или открывают что-то

// danger - красный цвет, для опасных действий типа удаления

// warning - оранжевый цвет, для действий которые требуют подтверждения

// success - зеленый цвет, для позитивных действий типа сохранения или подтверждения
