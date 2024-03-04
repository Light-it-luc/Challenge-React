import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <button {...props} type="button">
      {props.children}
    </button>
  );
};
