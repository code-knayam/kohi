import { Component } from "react";
import "./FoodMenu.scss";
import Carousal from "../shared/Carousal/Carousal";
import MenuItem from "../shared/MenuItem/MenuItem";

class FoodMenu extends Component {
	render() {
		return (
			<div className="food-menu-container">
				<div className="top-container">
					<h2 className="heading">What would you like to drink today?</h2>

					<div className="carousal-container">
						<Carousal></Carousal>
					</div>
				</div>

				<div className="food-menu-items">
					<MenuItem></MenuItem>
				</div>
			</div>
		);
	}
}

export default FoodMenu;
