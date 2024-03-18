import { useNavigate } from "react-router-dom";

import type { Product } from "~/api/products";
import { PRODUCTS_PER_PAGE } from "../constants";
import { Button } from "./Button";
import { ErrorComponent } from "./Error";
import { ProductCard } from "./ProductCard";

const NothingToShow = () =>
  ErrorComponent({
    heading: "Nothing to see here...",
    subheading: "No products to display",
  });

const sortAZ = (a: Product, b: Product): number =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" });

const sortZA = (a: Product, b: Product): number =>
  b.title.localeCompare(a.title, "en", { sensitivity: "base" });

const sortLowPrice = (a: Product, b: Product): number => a.price - b.price;
const sortHighPrice = (a: Product, b: Product): number => b.price - a.price;

const sortingFunctions = {
  az: sortAZ,
  za: sortZA,
  lowPrices: sortLowPrice,
  highPrices: sortHighPrice,
};

interface ProductProps {
  products: Product[];
  favorites: Product[];
  onFavoriteClick: (product: Product) => void;
  apiTotalProducts: number;
}

export const Products = ({
  products,
  favorites,
  onFavoriteClick,
  apiTotalProducts,
}: ProductProps) => {
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const view = String(queryParams.get("view")) as keyof typeof sortingFunctions;
  const currentLimit = Number(queryParams.get("limit") ?? PRODUCTS_PER_PAGE);

  const sortedProducts = products.toSorted(sortingFunctions[view]);

  const isLoadMoreVisible =
    products.length > 0 && currentLimit < apiTotalProducts;

  const handleLoadMoreClick = (currentLimit: number) => {
    const newLimit =
      currentLimit + PRODUCTS_PER_PAGE < apiTotalProducts
        ? currentLimit + PRODUCTS_PER_PAGE
        : apiTotalProducts;

    queryParams.set("limit", JSON.stringify(newLimit));

    navigate(
      { pathname: "/", search: queryParams.toString() },
      { replace: true },
    );
  };

  const RenderedProducts = () => (
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
        <Button
          text="Load more"
          onButtonClick={() => handleLoadMoreClick(currentLimit)}
        />
      )}
    </div>
  );

  return products.length ? <RenderedProducts /> : <NothingToShow />;
};
