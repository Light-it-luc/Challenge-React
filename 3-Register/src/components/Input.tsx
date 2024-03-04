"use client";

import { SVGProps } from "@/ui/Icons";
import { Dispatch } from "react";

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};

interface FormInputProps {
  PrimaryIcon: (props: SVGProps) => JSX.Element;
  value: string;
  setValue: Dispatch<string>;
  errorMessage: string;
  type: string;
  name: string;
  placeholder: string;
  SecondaryIcon?: (props: SVGProps) => JSX.Element;
  onSecondaryIconClick?: () => void;
}

export const Input = ({
  PrimaryIcon,
  value,
  setValue,
  errorMessage,
  type,
  name,
  placeholder,
  SecondaryIcon,
  onSecondaryIconClick,
}: FormInputProps) => {
  const inputId = `${name}-input`;

  return (
    <div className="relative flex flex-col gap-2 min-h-28">
      <label
        className="text-sm font-extralight text-custom-gray"
        htmlFor={inputId}
      >
        {toTitleCase(name).replace("-", " ")}
      </label>
      <div className="flex flex-row items-center w-full relative">
        <PrimaryIcon className="absolute left-4 fill-gray-200" />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type={type}
          name={name}
          id={inputId}
          required
          placeholder={placeholder}
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
};
