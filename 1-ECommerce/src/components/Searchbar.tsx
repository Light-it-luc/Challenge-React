import { useState } from "react"

export default function Searchbar(): JSX.Element {
    const [searchValue, setSearchValue] = useState<string>('')

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