import axios from "axios"

import { useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";

import { Button } from "./Button";
import { Loader } from "./Loader"
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

interface DummyApiResponseData {
    limit: number;
    products: Product[];
    skip: number;
    total: number
}

export const Products = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState<Product[]>([])
    const [favorites, setFavorites] = useLocalStorage<Product[]>('favorites', [])


    useEffect(() => {
        axios
            .get<DummyApiResponseData>("https://dummyjson.com/products?limit=6")
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }, [])

    const renderedProducts = products
        .map(product =>
            <ProductCard
                key={product.id}
                product={product}
                inFavorites={favorites.includes(product)}
                onFavoriteClick={() => handleFavoriteClick(product)}
            />
        )

    const handleFavoriteClick = (product: Product) => {
        const productInFavorites = favorites.includes(product);
        
        const updatedFavorites = (productInFavorites) ?
            favorites.filter(productInFavorites => productInFavorites.id !== product.id):
            [...favorites, product];

        setFavorites(updatedFavorites)
    }

    return (
        <div
            id="products-container"
            className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center
            h-full overflow-visible py-16 px-4 gap-4 lg:flex-row max-w-screen-lg md:mx-auto"
        >

            {/* Refactor missing here... use object literals */}
            { loading && <Loader /> }
            { error && <p>WE SCREWED UP!</p> }
            { products.length > 0 && renderedProducts }

            {/* Refactor missing: merge this & the previous one are the same condition */}
            { products.length > 0 &&
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center pt-8">
                    <Button text="Load more" onButtonClick={() => console.log("Load more clicked")} />
                    <Button text="Show less" onButtonClick={() => console.log("Show less clicked")} />
                </div>
            }
        </div>
    )
}