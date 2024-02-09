import { Menu } from './Menu'
import { Searchbar } from './Searchbar';
import { SortBy } from './SortBy';


const sortOptions = [
    { id: 1, label: 'Sory By' },
    { id: 2, label: 'Favorites' },
    { id: 3, label: 'A-Z' },
    { id: 4, label: 'Z-A' },
    { id: 5, label: 'Low Prices' },
    { id: 6, label: 'High Prices' },
]

const options = sortOptions
    .map(option =>
            <option
                key={option.id}
                value={option.id}
            >
                {option.label}
            </option>
    )


export const NavBar = () => 
    <nav className="flex flex-col md:flex-row md:justify-center md:gap-24 px-8 gap-4 lg:gap-24">
        <div className="flex flex-row gap-8 items-center">
            <Menu />
            <h1 className="text-2xl font-bold lg:text-4xl">Find what you need</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
            <Searchbar />
            <SortBy>
                {options}
            </SortBy>
        </div>
    </nav>