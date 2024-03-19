import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { fetchProducts } from "~/api/products";
import type { Product } from "~/api/products";
import { PRODUCTS_PER_PAGE } from "~/constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ErrorComponent } from "./Error";
import { Loader } from "./Loader";
import { Products } from "./Products";

export const ProductsContainer = () => {
  const [queryParams] = useSearchParams();
  const [favorites, setFavorites] = useLocalStorage<Product[]>("favorites", []);

  const limit = Number(queryParams.get("limit") ?? PRODUCTS_PER_PAGE);
  const search = queryParams.get("q") ?? "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { search, limit }],
    queryFn: () => fetchProducts({ search, limit }),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return (
      <ErrorComponent
        heading="Oops!"
        subheading="Looks like something went wrong..."
      />
    );
  }

  const viewIsFavorites = queryParams.get("view") === "favorites";
  const { products, total: apiTotalProducts } = data;

  const onFavoriteClick = (product: Product) => {
    const inFavorites = favorites.includes(product);

    const newFavorites = inFavorites
      ? favorites.filter((favoriteProduct) => favoriteProduct !== product)
      : [...favorites, product];

    setFavorites(newFavorites);
  };

  return (
    <Products
      products={viewIsFavorites ? favorites : products}
      apiTotalProducts={apiTotalProducts}
      favorites={favorites}
      onFavoriteClick={onFavoriteClick}
    />
  );
};
