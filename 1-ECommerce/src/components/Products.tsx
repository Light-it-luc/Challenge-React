import { useNavigate, useSearchParams } from "react-router-dom";

import { Button } from "./Button";
import { NothingToShow } from "./NothingToShow";
import { ProductCard } from "./ProductCard";
import type { Product } from "./ProductsContainer";

interface ProductProps {
  products: Product[];
  favorites: Product[];
  onFavoriteClick: (product: Product) => void;
}

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
        {products.map((product) => (
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

  return <>{products.length ? renderedProducts : <NothingToShow />}</>;
};
