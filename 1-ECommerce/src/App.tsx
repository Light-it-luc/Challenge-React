import "./index.css";

import { NavBar } from "./components/NavBar";
import { Products } from "./components/Products";

export default function App() {
  return (
    <div className="contaiener h-full w-full py-8 lg:flex lg:flex-col">
      <NavBar />

      <Products />
    </div>
  );
}
