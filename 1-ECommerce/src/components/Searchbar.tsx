import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MagnifierIcon } from "../ui/Icons";

export const Searchbar = () => {
  const queryParams = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState(queryParams.get("q") ?? "");
  const navigate = useNavigate();

  const handleSearchChange = (inputValue: string) => {
    if (inputValue) {
      queryParams.set("q", inputValue);
    } else {
      queryParams.delete("q");
    }

    setSearchValue(inputValue);
    navigate(
      {
        pathname: "/",
        search: queryParams.toString(),
      },
      { replace: true },
    );
  };

  return (
    <div className="relative w-full rounded-xl md:w-36 lg:w-44">
      <input
        className="h-full w-full rounded-xl pr-10"
        type="text"
        value={searchValue}
        placeholder="Search"
        onChange={(event) => handleSearchChange(event.target.value)}
      />

      <MagnifierIcon className="absolute right-4 top-3" />
    </div>
  );
};
