import { useState } from "react"

export const Searchbar = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <input
            className="w-full rounded-xl md:w-44"
            style={{ background: 'no-repeat center right 1rem url("/images/Magnifer.svg")' }}
            type="text"
            value={searchValue}
            placeholder="Search"
            onChange={(event) => setSearchValue(event.target.value)}
        />
    )
}