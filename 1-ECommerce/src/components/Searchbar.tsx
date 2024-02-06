import { useState } from "react"

export default function Searchbar() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <input
            className="w-72 rounded-xl"
            style={{ background: 'no-repeat center right 1rem url("/images/Magnifer.svg")' }}
            type="text"
            value={searchValue}
            placeholder="Search"
            onChange={(event) => setSearchValue(event.target.value)}
        />
    )
}