import "./FoodMenu.scss";
import Carousel from "../shared/Carousel/Carousel";
import MenuItem from "../shared/MenuItem/MenuItem";
import image1 from "./../../assets/images/coffee-1.png";
import image2 from "./../../assets/images/coffee-2.jpg";
import image3 from "./../../assets/images/coffee-3.png";
import image4 from "./../../assets/images/coffee-4.jpg";

const MENU_ITEMS = [
	{
		id: "mi1",
		type: "Black Coffee",
		name: "Iced Americano",
		img: image1,
	},
	{
		id: "mi2",
		type: "Winter Special",
		name: "Cappucino Latte",
		img: image2,
	},
	{
		id: "mi3",
		type: "Decaff",
		name: "Silky Cafe Au Lait",
		img: image3,
	},
	{
		id: "mi4",
		type: "Chocolate",
		name: "Iced Chocolate",
		img: image4,
	},
];

const CAROUSEL_ITEMS = [
	{
		id: 1,
		label: "Popular",
	},
	{
		id: 2,
		label: "Black Coffee",
	},
	{
		id: 3,
		label: "Winter Special",
	},
	{
		id: 4,
		label: "Decaff",
	},
	{
		id: 5,
		label: "Chocolate",
	},
];

function FoodMenu() {
	const renderMenuItems = () => {
		return MENU_ITEMS.map((item) => {
			return <MenuItem menuItem={item} key={item.id} />;
		});
	};

	return (
		<div className="food-menu-container">
			<div className="top-container">
				<h2 className="heading">What would you like to drink today?</h2>

				<div className="carousal-container">
					<Carousel items={CAROUSEL_ITEMS}></Carousel>
				</div>
			</div>

			<div className="food-menu-items">{renderMenuItems()}</div>
		</div>
	);
}

export default FoodMenu;
