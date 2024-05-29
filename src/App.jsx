import { Loader } from "./components/Loader";
import { RoutesAll } from "./Routes/RoutesAll";

function App() {

    return (
        <div className="relative">
            <Loader />
            <RoutesAll />
        </div>
    );
}

export default App;
