
export default function SortBy({ children }) {
    return (
        <select
            className="w-72 rounded-xl text-gray-500"
            name="sort-by"
            id="sort-by">
            {children}
        </select>
    )
}
