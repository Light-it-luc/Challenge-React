import { twMerge } from "tailwind-merge";

import { MenuOptionArrow } from "../ui/Icons";

interface Option {
  id: number;
  name: string;
}

interface MenuOptionProps {
  active: boolean;
  option: Option;
  onOptionClick: () => void;
}

export const MenuOption = ({
  active,
  option,
  onOptionClick,
}: MenuOptionProps) => (
  <button
    className={`flex w-full flex-row items-center justify-between rounded-full
    border-2 px-4 py-2 ${active ? "border-green-300" : "border-transparent"}`}
    onClick={onOptionClick}
  >
    <div className="text-red-600">{option.name}</div>

    <MenuOptionArrow
      className={twMerge("transition-transform", active && "rotate-180")}
    />
  </button>
);
