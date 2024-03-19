import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { SearchArrowIcon } from "../ui/Icons";

export const SortBy = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState(
    queryParams.get("view") ?? "",
  );
  const navigate = useNavigate();

  const sortOptions = [
    { id: 1, label: "Sory By", value: "" },
    { id: 2, label: "Favorites", value: "favorites" },
    { id: 3, label: "A-Z", value: "az" },
    { id: 4, label: "Z-A", value: "za" },
    { id: 5, label: "Low Prices", value: "lowPrices" },
    { id: 6, label: "High Prices", value: "highPrices" },
  ];

  const handleSelectChange = (selectValue: string) => {
    setSelectedOption(selectValue);

    setQueryParams(() => {
      selectValue
        ? queryParams.set("view", selectValue)
        : queryParams.delete("view");

      return queryParams;
    });

    navigate(
      { pathname: "/", search: queryParams.toString() },
      { replace: true },
    );
  };

  return (
    <div className="relative h-full w-full md:w-36 lg:w-44">
      <select
        className="h-full w-full rounded-xl bg-none text-gray-500"
        name="sort-by"
        id="sort-by"
        value={selectedOption}
        onChange={(event) => handleSelectChange(event.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <SearchArrowIcon className="absolute right-4 top-3" />
    </div>
  );
};
