
interface Props {
    children: JSX.Element[]
}

export default function SortBy({ children }: Props) {
    return (
        <select
            className="w-full rounded-xl text-gray-500 md:w-44"
            style={{ background: 'no-repeat center right 1rem url("/images/SearchArrow.svg")' }}
            name="sort-by"
            id="sort-by">
            {children}
        </select>
    )
}
