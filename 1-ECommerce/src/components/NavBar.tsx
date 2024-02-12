import { Menu } from "./Menu";
import { Searchbar } from "./Searchbar";
import { SortBy } from "./SortBy";

export const NavBar = () => (
  <nav className="flex flex-col gap-4 px-8 md:flex-row md:justify-center md:gap-24 lg:gap-24">
    <div className="flex flex-row items-center gap-8">
      <Menu />
      <h1 className="text-2xl font-bold lg:text-4xl">Find what you need</h1>
    </div>

    <div className="flex flex-col gap-4 md:flex-row">
      <Searchbar />
      <SortBy />
    </div>
  </nav>
);
