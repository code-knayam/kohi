import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { EthProvider } from "./context/EthContext";
import renderRoutes from "./Routes";

function App() {
	return (
		<EthProvider>
			<Router>
				<div className="App">{renderRoutes()}</div>
			</Router>
		</EthProvider>
	);
}

export default App;
