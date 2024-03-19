import "./index.css";

import { NavBar } from "./components/NavBar";
import { ProductsContainer } from "./components/ProductsContainer";

export default function App() {
  return (
    <div className="contaiener h-full w-full py-8 lg:flex lg:flex-col">
      <NavBar />

      <main
        id="products-container"
        className="flex h-full max-w-screen-lg flex-col items-center justify-center
        gap-4 px-4 py-16 md:mx-auto md:flex-row md:flex-wrap lg:flex-row"
      >
        <ProductsContainer />
      </main>
    </div>
  );
}
