import {RoutesProvider} from "./providers/";
import {StoreProvider} from "./providers/";

function App() {
    return (
        <StoreProvider>
            <RoutesProvider/>
        </StoreProvider>
    )
}

export default App