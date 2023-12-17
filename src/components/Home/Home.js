import { Outlet } from "react-router-dom";
import { Component } from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Navbar from "../Navbar.js/Navbar";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="header">
					<Header />
				</div>
				<div className="content">
					<Outlet />
				</div>
				<div className="navbar">
					<Navbar />
				</div>
			</div>
		);
	}
}

export default Home;
