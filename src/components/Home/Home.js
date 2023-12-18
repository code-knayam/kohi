import { Outlet } from "react-router-dom";
import { Component } from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Navbar from "../Navbar.js/Navbar";

class Home extends Component {
	render() {
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
}

export default Home;