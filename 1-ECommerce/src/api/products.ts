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

interface GetResponseData {
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

  const url = search
    ? `https://dummyjson.com/products/search?q=${search}&limit=${newLimit}`
    : `https://dummyjson.com/products?limit=${newLimit}`;

  const response = await axios.get<GetResponseData>(url);

  return response.data;
};
