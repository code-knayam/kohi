import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/Auth";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Orders from "./components/Orders/Orders";

function renderRoutes() {
	return (
		<Routes>
			<Route path="" element={<Navigate to="/home" replace />}></Route>
			<Route path="/" element={<Home />}>
				<Route path="home" element={<FoodMenu />}></Route>
				<Route path="/home/details/:id" element={<ItemDetails />}></Route>
				<Route path="cart" element={<Cart />}></Route>
				<Route path="cart/:id" element={<Orders />}></Route>
				<Route path="profile" element={<Profile />}></Route>
			</Route>
			<Route path="/auth" element={<Auth />}></Route>
			<Route path="*" element={<div />} />
		</Routes>
	);
}

export default renderRoutes;
