import { Component } from "react";
import "./FoodMenu.scss";
import Carousel from "../shared/Carousel/Carousel";
import MenuItem from "../shared/MenuItem/MenuItem";

class FoodMenu extends Component {
	render() {
		return (
			<div className="food-menu-container">
				<div className="top-container">
					<h2 className="heading">What would you like to drink today?</h2>

					<div className="carousal-container">
						<Carousel></Carousel>
					</div>
				</div>

				<div className="food-menu-items">
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
					<MenuItem></MenuItem>
				</div>
			</div>
		);
	}
}

export default FoodMenu;
