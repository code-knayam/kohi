import { Component } from "react";
import "./FoodMenu.scss";

class FoodMenu extends Component {
	render() {
		return (
			<div className="food-menu-container">
				<div className="top-container">
					<h2 className="heading">What would you like to drink today?</h2>

					<div className="carousal-container">
						<div className="carousal-item">Popular</div>
					</div>
				</div>

				<div className="food-menu-items">
					<div className="food-menu-item"></div>
				</div>
			</div>
		);
	}
}

export default FoodMenu;
