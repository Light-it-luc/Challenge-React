import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Products } from "./Products";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type Views = "loading" | "error" | "products" | "favorites";

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
    products: () => Products({ products, favorites, onFavoriteClick }),
    favorites: () =>
      Products({ products: favorites, favorites, onFavoriteClick }),
  };

  const view: Views = loading
    ? "loading"
    : error
      ? "error"
      : viewIsFavorites
        ? "favorites"
        : "products";

  const Component = components[view];

  return (
    <>
      <div
        id="products-container"
        className="flex h-full max-w-screen-lg flex-col items-center justify-center
        gap-4 px-4 py-16 md:mx-auto md:flex-row md:flex-wrap lg:flex-row"
      >
        <Component />
      </div>
    </>
  );
};
