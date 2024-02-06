import Menu from './Menu'
import Searchbar from './Searchbar';
import SortBy from './SortBy';

export default function Filters() {
    return (
        <div className="flex flex-col px-8 gap-4 items-center">
            <div className="flex flex-row gap-8 items-center">

                <Menu />

                <h1 className="text-2xl font-bold">Find what you need</h1>
            </div>

            <Searchbar />

            <SortBy>
                <option value="0">Sort By</option>
            </SortBy>
        </div>
    )
}