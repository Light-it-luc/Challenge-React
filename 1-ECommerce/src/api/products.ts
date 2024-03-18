import axios from "axios";

import { PRODUCTS_PER_PAGE } from "~/constants";

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

export const fetchProducts = async () => {
  const queryParams = new URLSearchParams(location.search);
  const queryLimit = Number(queryParams.get("limit"));

  const limit =
    queryLimit && queryLimit > PRODUCTS_PER_PAGE
      ? queryLimit
      : PRODUCTS_PER_PAGE;

  let url;
  if (queryParams.get("q")) {
    url = `https://dummyjson.com/products/search?q=${queryParams.get("q")}&limit=${limit}`;
  } else {
    url = `https://dummyjson.com/products?limit=${limit}`;
  }

  const response = await axios.get<DummyJsonApiResponseData>(url);

  return response.data;
};
