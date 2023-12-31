import "./FoodMenu.scss";
import Carousel from "../shared/Carousel/Carousel";
import MenuItem from "../shared/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useMenu from "../../hooks/useMenu";

function FoodMenu() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const menu = useMenu();

	const [filter, setFilter] = useState("recommended");
	const [menuItems, setMenuItems] = useState([]);

	const { categories } = useSelector(({ menu }) => {
		return menu;
	});

	useEffect(() => {
		const items = menu.getMenuItemsByType(filter);
		setMenuItems(items);
	}, [filter, categories]);

	const handleMenuItemClick = (itemId) => {
		navigate(`/home/details/${itemId}`);
	};

	const handleItemClick = (e) => {
		setFilter(e);
	};

	const renderMenuItems = () =>
		menuItems.map((item) => {
			return (
				<MenuItem
					menuItem={item}
					key={item.id}
					clickHandler={() => handleMenuItemClick(item.id)}
				/>
			);
		});

	return (
		<div className="food-menu-container">
			<div className="top-container">
				<h2 className="heading">What would you like to drink today?</h2>

				<div className="carousal-container">
					<Carousel
						items={categories}
						handleOnItemClick={handleItemClick}
					></Carousel>
				</div>
			</div>

			<div className="food-menu-items">{renderMenuItems()}</div>
		</div>
	);
}

export default FoodMenu;
