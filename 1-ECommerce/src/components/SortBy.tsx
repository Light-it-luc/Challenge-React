
export default function SortBy({ children }) {
    return (
        <select
            className="w-72 rounded-xl text-gray-500 md:w-44"
            style={{ background: 'no-repeat center right 1rem url("/images/SearchArrow.svg")' }}
            name="sort-by"
            id="sort-by">
            {children}
        </select>
    )
}
