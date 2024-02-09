import { SearchArrowIcon } from "../ui/Icons";

interface SortByProps {
  children: React.ReactNode;
}

export const SortBy = ({ children }: SortByProps) => (
  <div className="relative h-full w-full md:w-36 lg:w-44">
    <select
      className="h-full w-full rounded-xl bg-none text-gray-500"
      name="sort-by"
      id="sort-by"
    >
      {children}
    </select>

    <SearchArrowIcon className="absolute right-4 top-3" />
  </div>
);
