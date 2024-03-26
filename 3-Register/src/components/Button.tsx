import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ComponentPropsWithoutRef<"button">) => {
  return <button {...props}>{props.children}</button>;
};
