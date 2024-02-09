import "./index.css";
import { NavBar } from "./components/NavBar"
import { Products } from "./components/Products";

export default function App() {
    return (
        <div className="contaiener py-8 w-full h-full lg:flex lg:flex-col">
            <NavBar />

            <Products />
        </div>
    )
}
