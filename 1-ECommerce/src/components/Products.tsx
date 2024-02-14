import { useNavigate, useSearchParams } from "react-router-dom";

import type { Product } from "../hooks/useFilteredProducts";
import { Button } from "./Button";
import { NothingToShow } from "./NothingToShow";
import { ProductCard } from "./ProductCard";

interface ProductProps {
  products: Product[];
  favorites: Product[];
  onFavoriteClick: (product: Product) => void;
}

type SortProductFunction = (a: Product, b: Product) => number;

const sortAZ = (a: Product, b: Product): number =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" });

const sortZA = (a: Product, b: Product): number =>
  b.title.localeCompare(a.title, "en", { sensitivity: "base" });

const sortLowPrice = (a: Product, b: Product): number => b.price - a.price;
const sortHighPrice = (a: Product, b: Product): number => a.price - b.price;

const sortingFunctions = {
  az: sortAZ,
  za: sortZA,
  lowPrices: sortLowPrice,
  highPrices: sortHighPrice,
};

export const Products = ({
  products,
  favorites,
  onFavoriteClick,
}: ProductProps) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const navigate = useNavigate();

  const API_TOTAL_PRODUCTS = 100;
  const PRODUCTS_PER_PAGE = 6;
  const currentLimit = Number(queryParams.get("limit") ?? 6);

  const view = String(queryParams.get("view"));

  const sortedProducts =
    view in sortingFunctions
      ? products.toSorted(sortingFunctions[view] as SortProductFunction)
      : products;

  const isLoadMoreVisible =
    products.length > 0 && currentLimit < API_TOTAL_PRODUCTS;

  const handleLoadMoreClick = () => {
    const newLimit =
      currentLimit + PRODUCTS_PER_PAGE < API_TOTAL_PRODUCTS
        ? currentLimit + PRODUCTS_PER_PAGE
        : API_TOTAL_PRODUCTS;

    queryParams.set("limit", JSON.stringify(newLimit));
    setQueryParams(queryParams);

    navigate(
      { pathname: "/", search: queryParams.toString() },
      { replace: true },
    );
  };

  const renderedProducts = (
    <div className="flex flex-col items-center justify-center gap-16">
      <div
        className="flex flex-col items-center justify-center gap-4
        p-4 md:mx-auto md:flex-row md:flex-wrap lg:flex-row"
      >
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inFavorites={favorites.includes(product)}
            onFavoriteClick={() => onFavoriteClick(product)}
          />
        ))}
      </div>
      {isLoadMoreVisible && (
        <Button text="Load more" onButtonClick={handleLoadMoreClick} />
      )}
    </div>
  );

  return products.length ? renderedProducts : <NothingToShow />;
};
