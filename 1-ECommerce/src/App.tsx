import "./index.css";
import Filters from "./components/Filters"

export default function App() {
    return (
        <>
            <div className="contaiener py-8 w-full h-full lg:flex lg:flex-col">
                <div className="lg:mx-auto">
                    <Filters />
                </div>
            </div>
        </>
    )
}
