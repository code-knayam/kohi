import { Outlet } from "react-router-dom";
import "./Home.scss";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories, fetchMenu } from "../../store/store";

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMenu());
		dispatch(fetchCategories());
	}, [dispatch]);

	return (
		<div className="Home">
			<div className="header-container">
				<Header />
			</div>
			<div className="content-container">
				<Outlet />
			</div>
			<div className="navbar-container">
				<Navbar />
			</div>
		</div>
	);
}

export default Home;
