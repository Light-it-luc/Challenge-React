
interface SortByProps {
    children: React.ReactNode
}

export const SortBy = ({ children }: SortByProps) => {
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
