import { HeartIcon } from "../ui/Icons";

interface FavoriteButtonProp {
    inFavorites: boolean;
    onFavoriteClick: () => void;
}

export const FavoriteButton = ({ inFavorites, onFavoriteClick }: FavoriteButtonProp) =>
    <button onClick={onFavoriteClick}>
        <HeartIcon className={inFavorites ? 'fill-red-500' : ''} />
    </button>
