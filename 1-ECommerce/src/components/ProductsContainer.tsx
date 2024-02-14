import type { Product } from "../hooks/useFilteredProducts";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Products } from "./Products";

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

  let Component: () => JSX.Element;
  if (loading) {
    Component = Loader;
  } else if (error) {
    Component = Error;
  } else {
    Component = () =>
      Products({
        products: viewIsFavorites ? favorites : products,
        favorites,
        onFavoriteClick,
      });
  }

  return (
    <main
      id="products-container"
      className="flex h-full max-w-screen-lg flex-col items-center justify-center
        gap-4 px-4 py-16 md:mx-auto md:flex-row md:flex-wrap lg:flex-row"
    >
      <Component />
    </main>
  );
};
