import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";

import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="" element={<Navigate to="/home" replace />}></Route>
					<Route path="/" element={<Home />}>
						<Route path="home" element={<Menu />}></Route>
						<Route path="cart" element={<Cart />}></Route>
						<Route path="profile" element={<Profile />}></Route>
					</Route>
					<Route path="*" element={<div />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
