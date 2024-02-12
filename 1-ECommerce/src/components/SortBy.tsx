import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SearchArrowIcon } from "../ui/Icons";

export const SortBy = () => {
  const queryParams = new URLSearchParams(location.search);
  const [selectedOption, setSelectedOption] = useState(
    queryParams.get("view") ?? "",
  );
  const navigate = useNavigate();

  const sortOptions = [
    { id: 1, label: "Sory By", value: "" },
    { id: 2, label: "Favorites", value: "favorites" },
    { id: 3, label: "A-Z", value: "a-z" },
    { id: 4, label: "Z-A", value: "z-a" },
    { id: 5, label: "Low Prices", value: "low_prices" },
    { id: 6, label: "High Prices", value: "high_prices" },
  ];

  const handleSelectChange = (selectValue: string) => {
    setSelectedOption(selectValue);

    if (selectValue) {
      queryParams.set("view", selectValue);
    } else {
      queryParams.delete("view");
    }

    navigate(
      { pathname: "/", search: queryParams.toString() },
      { replace: true },
    );
  };

  const options = sortOptions.map((option) => (
    <option key={option.id} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="relative h-full w-full md:w-36 lg:w-44">
      <select
        className="h-full w-full rounded-xl bg-none text-gray-500"
        name="sort-by"
        id="sort-by"
        value={selectedOption}
        onChange={(event) => handleSelectChange(event.target.value)}
      >
        {options}
      </select>

      <SearchArrowIcon className="absolute right-4 top-3" />
    </div>
  );
};
