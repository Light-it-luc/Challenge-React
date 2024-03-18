import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "~/api/products";
import type { Product } from "~/api/products";
import { ViewContext } from "~/App";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Products } from "./Products";

export const ProductsContainer = () => {
  const { view } = useContext(ViewContext);
  const queryParams = new URLSearchParams(window.location.search);
  const [favorites, setFavorites] = useLocalStorage<Product[]>("favorites", []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", queryParams.toString()], //limit missing
    queryFn: () => fetchProducts(),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Error heading="Oops!" subheading="Looks like something went wrong..." />
    );
  }

  const viewIsFavorites = view === "favorites";
  const { products, total: apiTotalProducts } = { ...data }; // Refactor

  const onFavoriteClick = (product: Product) => {
    const inFavorites = favorites.includes(product);

    const newFavorites = inFavorites
      ? favorites.filter((favoriteProduct) => favoriteProduct !== product)
      : [...favorites, product];

    setFavorites(newFavorites);
  };

  return (
    <Products
      products={(viewIsFavorites ? favorites : products)!}
      apiTotalProducts={apiTotalProducts ?? 10}
      favorites={favorites}
      onFavoriteClick={onFavoriteClick}
    />
  );
};
