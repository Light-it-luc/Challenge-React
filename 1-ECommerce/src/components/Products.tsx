import type { Product } from "../hooks/useFilteredProducts";
import { PRODUCTS_PER_PAGE } from "../hooks/useFilteredProducts";
import { Button } from "./Button";
import { NothingToShow } from "./NothingToShow";
import { ProductCard } from "./ProductCard";

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
  limit: number;
  setLimit: (newLimit: number) => void;
}

export const Products = ({
  products,
  favorites,
  onFavoriteClick,
  apiTotalProducts,
  limit,
  setLimit,
}: ProductProps) => {
  const queryParams = new URLSearchParams(location.search);

  const view = String(queryParams.get("view")) as keyof typeof sortingFunctions;
  const sortedProducts = products.toSorted(sortingFunctions[view]);

  const isLoadMoreVisible = products.length > 0 && limit < apiTotalProducts;

  const handleLoadMoreClick = () => {
    const newLimit =
      limit + PRODUCTS_PER_PAGE < apiTotalProducts
        ? limit + PRODUCTS_PER_PAGE
        : apiTotalProducts;

    setLimit(newLimit);
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
        <Button text="Load more" onButtonClick={handleLoadMoreClick} />
      )}
    </div>
  );

  return products.length ? <RenderedProducts /> : <NothingToShow />;
};
