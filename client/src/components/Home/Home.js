import { Outlet } from "react-router-dom";
import "./Home.scss";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchMenu } from "../../store/store";
import Loader from "../shared/Loader/Loader";

function Home() {
	const dispatch = useDispatch();

	const { loading, error } = useSelector(({ menu }) => {
		return menu;
	});

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
				{loading ? (
					<div className="content-loader">
						<Loader />
					</div>
				) : (
					<Outlet />
				)}
			</div>
			<div className="navbar-container">
				<Navbar />
			</div>
		</div>
	);
}

export default Home;
