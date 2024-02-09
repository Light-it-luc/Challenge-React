import { useEffect, useState } from "react";
import axios from "axios";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { ProductCard } from "./ProductCard";

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

interface DummyJsonApiResponseData {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useLocalStorage<Product[]>("favorites", []);

  // Refactor to grab state from URL Params
  useEffect(() => {
    axios
      .get<DummyJsonApiResponseData>("https://dummyjson.com/products?limit=6")
      .then((res) => {
        setTimeout(() => {
          setProducts(res.data.products);
          setLoading(false);
        }, 5000);
        /* setProducts(res.data.products)
                setLoading(false) */
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const renderedProducts = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      inFavorites={favorites.includes(product)}
      onFavoriteClick={() => handleFavoriteClick(product)}
    />
  ));

  const handleFavoriteClick = (product: Product) => {
    const productInFavorites = favorites.includes(product);

    const updatedFavorites = productInFavorites
      ? favorites.filter(
          (productInFavorites) => productInFavorites.id !== product.id,
        )
      : [...favorites, product];

    setFavorites(updatedFavorites);
  };

  return (
    <div
      id="products-container"
      className="flex h-full max-w-screen-lg flex-col items-center gap-4 overflow-visible px-4 py-16 md:mx-auto md:flex-row md:flex-wrap md:justify-center lg:flex-row"
    >
      {/* Refactor missing here... use object literals */}
      {loading && <Loader />}
      {error && <p>WE SCREWED UP!</p>}
      {products.length > 0 && renderedProducts}

      {/* Refactor missing: merge this & the previous one are the same condition */}
      {products.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-8 pt-8 md:flex-row">
          <Button
            text="Load more"
            onButtonClick={() => console.log("Load more clicked")}
          />
          <Button
            text="Show less"
            onButtonClick={() => console.log("Show less clicked")}
          />
        </div>
      )}
    </div>
  );
};
