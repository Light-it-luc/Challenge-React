import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

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

export const useFilteredProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation();

  useEffect(() => {
    let ignore = false;
    const fetchProducts = () => {
      const queryParams = new URLSearchParams(location.search);
      const limit = queryParams.get("limit") ?? 6;
      const searchString = queryParams.get("q");

      const url = `https://dummyjson.com/products${
        searchString ? `/search?q=${searchString}` : `?limit=${limit}`
      }`;

      axios
        .get<DummyJsonApiResponseData>(url)
        .then((res) => {
          if (!ignore) setProducts(res.data.products);
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    };

    fetchProducts();
    return () => {
      ignore = true;
    };
  }, [location]);

  return { products, loading, error };
};
