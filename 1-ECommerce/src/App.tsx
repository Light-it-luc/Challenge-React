import "./index.css";

import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ProductsContainer } from "./components/ProductsContainer";

interface SearchParamContext {
  queryParams: URLSearchParams;
  setQueryParams: Dispatch<SetStateAction<URLSearchParams>>;
}

export const QueryParamContext = createContext({} as SearchParamContext);

export default function App() {
  const [queryParams, setQueryParams] = useSearchParams();

  return (
    <QueryParamContext.Provider value={{ queryParams, setQueryParams }}>
      <div className="contaiener h-full w-full py-8 lg:flex lg:flex-col">
        <NavBar />

        <main
          id="products-container"
          className="flex h-full max-w-screen-lg flex-col items-center justify-center
        gap-4 px-4 py-16 md:mx-auto md:flex-row md:flex-wrap lg:flex-row"
        >
          <ProductsContainer />
        </main>
      </div>
    </QueryParamContext.Provider>
  );
}
