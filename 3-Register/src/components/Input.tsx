"use client";

import { SVGProps } from "@/ui/Icons";
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  PrimaryIcon: (props: SVGProps) => JSX.Element;
  errorMessage?: string;
  type: string;
  name: string;
  label: string;
  placeholder: string;
  SecondaryIcon?: (props: SVGProps) => JSX.Element;
  onSecondaryIconClick?: () => void;
}

export const Input = forwardRef(
  (
    {
      PrimaryIcon,
      errorMessage,
      type,
      name,
      label,
      placeholder,
      SecondaryIcon,
      onSecondaryIconClick,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="relative flex flex-col gap-2 min-h-28">
        <label
          className="text-sm font-extralight text-custom-gray"
          htmlFor={`${name}-input`}
        >
          {label}
        </label>
        <div className="flex flex-row items-center w-full relative">
          <PrimaryIcon className="absolute left-4 fill-gray-200" />
          <input
            ref={ref}
            type={type}
            name={name}
            id={`${name}-input`}
            placeholder={placeholder}
            {...props}
            className="w-full px-10 py-4 border-b border-gray-500 outline-0 rounded-t-xl focus:border-b-2 focus:border-red-500"
          />
          {SecondaryIcon && (
            <button
              type="button"
              className="absolute right-4"
              onClick={onSecondaryIconClick}
            >
              <SecondaryIcon />
            </button>
          )}
        </div>
        {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
