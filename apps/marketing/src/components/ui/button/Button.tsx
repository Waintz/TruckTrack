import { ButtonProps } from "./button.types";
import { Primary } from "./variants/Primary";
import { Outline } from "./variants/Outline";
import React from "react";
import { Default } from "./variants/Default";

export function Button(props: ButtonProps) {
  if (props.variant === "default") {
    const { variant, ...rest } = props;
    void variant;
    return <Default {...rest} />;
  }
  if (props.variant === "primary") {
    const { variant, ...rest } = props;
    void variant;
    return <Primary {...rest} />;
  }
  if (props.variant === "outline") {
    const { variant, ...rest } = props;
    void variant;
    return <Outline {...rest} />;
  }
  return null;
}
