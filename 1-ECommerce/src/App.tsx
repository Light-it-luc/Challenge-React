import "./index.css";

import { NavBar } from "./components/NavBar";
import { ProductsContainer } from "./components/ProductsContainer";

export default function App() {
  return (
    <div className="contaiener h-full w-full py-8 lg:flex lg:flex-col">
      <NavBar />

      <ProductsContainer />
    </div>
  );
}
