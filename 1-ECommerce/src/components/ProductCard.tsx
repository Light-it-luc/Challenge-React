import { FavoriteButton } from "./FavoriteButton";
import type { Product } from "./Products";

interface ProductCardProp {
  product: Product;
  inFavorites: boolean;
  onFavoriteClick: () => void;
}

export const ProductCard = ({
  product,
  inFavorites,
  onFavoriteClick,
}: ProductCardProp) => (
  <div
    className="flex h-96 w-64 flex-col items-center justify-between gap-4
    overflow-hidden rounded-3xl border border-white p-4 hover:border-gray-500"
  >
    <img
      className="h-40 w-52 rounded-t-3xl object-cover"
      src={product.thumbnail}
      alt={product.title}
    />

    <div className="flex flex-col items-center gap-2 text-center">
      <h4 className="line-clamp-1 text-ellipsis text-2xl font-normal">
        {product.title}
      </h4>
      <p className="line-clamp-3 text-ellipsis font-thin text-gray-500">
        {product.description}
      </p>
    </div>

    <div className="flex w-full justify-between px-2">
      <div className="text-gray-500">€ {product.price}</div>

      <FavoriteButton
        inFavorites={inFavorites}
        onFavoriteClick={onFavoriteClick}
      />
    </div>
  </div>
);
