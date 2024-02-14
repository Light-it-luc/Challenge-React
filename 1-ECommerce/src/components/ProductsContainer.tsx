import type { Product } from "../hooks/useFilteredProducts";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Products } from "./Products";

type Views = "loading" | "error" | "products";

export const ProductsContainer = () => {
  const [favorites, setFavorites] = useLocalStorage<Product[]>("favorites", []);
  const { products, loading, error } = useFilteredProducts();

  const queryParams = new URLSearchParams(window.location.search);
  const viewIsFavorites = queryParams.get("view") === "favorites";

  const onFavoriteClick = (product: Product) => {
    const inFavorites = favorites.includes(product);

    const newFavorites = inFavorites
      ? favorites.filter((favoriteProduct) => favoriteProduct !== product)
      : [...favorites, product];

    setFavorites(newFavorites);
  };

  const components = {
    loading: Loader,
    error: Error,
    products: () =>
      Products({
        products: viewIsFavorites ? favorites : products,
        favorites,
        onFavoriteClick,
      }),
  };

  let view: Views;
  if (loading) {
    view = "loading";
  } else if (error) {
    view = "error";
  } else {
    view = "products";
  }

  const Component = components[view];

  return (
    <div
      id="products-container"
      className="flex h-full max-w-screen-lg flex-col items-center justify-center
        gap-4 px-4 py-16 md:mx-auto md:flex-row md:flex-wrap lg:flex-row"
    >
      <Component />
    </div>
  );
};
