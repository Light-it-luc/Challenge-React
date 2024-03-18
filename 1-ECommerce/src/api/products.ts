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

interface FetchProductsProps {
  search: string;
  limit: number;
}

export const fetchProducts = async ({
  search,
  limit = PRODUCTS_PER_PAGE,
}: FetchProductsProps) => {
  const newLimit = limit > PRODUCTS_PER_PAGE ? limit : PRODUCTS_PER_PAGE;

  let url;
  if (search) {
    url = `https://dummyjson.com/products/search?q=${search}&limit=${newLimit}`;
  } else {
    url = `https://dummyjson.com/products?limit=${newLimit}`;
  }

  const response = await axios.get<DummyJsonApiResponseData>(url);

  return response.data;
};
