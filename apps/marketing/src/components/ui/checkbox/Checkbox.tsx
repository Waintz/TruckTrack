import { CheckboxVariat } from "./checkbox.types";
import { CheckboxDefault } from "./variats/CheckboxDefault";
import { CheckboxPrimary } from "./variats/CheckboxPrimary";

interface ICheckbox {
  variat: CheckboxVariat;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({ variat, checked, onCheckedChange }: ICheckbox) {
  switch (variat) {
    case "default":
      return (
        <CheckboxDefault checked={checked} onCheckedChange={onCheckedChange} />
      );
    case "primary":
      return (
        <CheckboxPrimary checked={checked} onCheckedChange={onCheckedChange} />
      );
    default:
      return null;
  }
}
