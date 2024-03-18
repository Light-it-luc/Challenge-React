import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { QueryParamContext } from "~/App";
import { MagnifierIcon } from "../ui/Icons";

export const Searchbar = () => {
  const { queryParams, setQueryParams } = useContext(QueryParamContext);
  const [searchValue, setSearchValue] = useState(queryParams.get("q") ?? "");
  const navigate = useNavigate();

  const handleSearchChange = (inputValue: string) => {
    setSearchValue(inputValue);

    setQueryParams(() => {
      if (inputValue) {
        queryParams.set("q", inputValue);
      } else {
        queryParams.delete("q");
      }
      queryParams.delete("limit");

      return queryParams;
    });

    navigate(
      { pathname: "/", search: queryParams.toString() },
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
