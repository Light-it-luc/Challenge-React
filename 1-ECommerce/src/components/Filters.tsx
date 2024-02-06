import Menu from './Menu'
import Searchbar from './Searchbar';
import SortBy from './SortBy';

export default function Filters() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between px-8 gap-4 lg:gap-24">
            <div className="flex flex-row gap-8 items-center">

                <Menu />

                <h1 className="text-2xl font-bold lg:text-4xl">Find what you need</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <Searchbar />

                <SortBy>
                    <option value="0">Sort By</option>
                </SortBy>
            </div>
        </div>
    )
}