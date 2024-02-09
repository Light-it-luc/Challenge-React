import type { Product } from "./Products";
import { FavoriteButton } from "./FavoriteButton";

interface ProductCardProp {
    product: Product;
    inFavorites: boolean;
    onFavoriteClick: () => void;
}

export const ProductCard = ({ product, inFavorites, onFavoriteClick }: ProductCardProp) =>
    <div
        className="flex flex-col items-center justify-between border border-white
        overflow-hidden w-64 h-96 p-4 rounded-3xl gap-4 hover:border-gray-500"
    >
        <img className="object-cover w-52 h-40 rounded-t-3xl" src={product.thumbnail} alt={product.title} />

        <div className="flex flex-col items-center text-center gap-2">
            <h4 className="line-clamp-1 text-2xl text-ellipsis font-normal">{product.title}</h4>
            <p className="line-clamp-3 text-ellipsis font-thin text-gray-500">{product.description}</p>
        </div>

        <div className="flex justify-between w-full px-2">
            <div className="text-gray-500">€ {product.price}</div>

            <FavoriteButton
                inFavorites={inFavorites}
                onFavoriteClick={onFavoriteClick}
            />
        </div>
    </div>