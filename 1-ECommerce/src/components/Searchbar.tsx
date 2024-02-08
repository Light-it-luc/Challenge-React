import { useState } from "react"

import { MagnifierIcon } from "~/ui/Icons"

export const Searchbar = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="relative w-full rounded-xl md:w-44">
            <input
                className="w-full h-full rounded-xl"
                type="text"
                value={searchValue}
                placeholder="Search"
                onChange={(event) => setSearchValue(event.target.value)}
            />

            <MagnifierIcon className="absolute right-4 top-3" />
        </div>
    )
}