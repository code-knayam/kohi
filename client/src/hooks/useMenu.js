import { useSelector } from "react-redux";
import { CONSTANTS } from "../utils/app-constants";

const useMenu = () => {
	const { menuItems } = useSelector(({ menu }) => {
		return menu;
	});

	const getMenuItemsByType = (type) => {
		if (type === CONSTANTS.RECOMMENDED) {
			return menuItems.slice(0, 5);
		}
		const items = menuItems.filter((item) => {
			return item.type.toLowerCase() === type.toLowerCase();
		});
		return items;
	};

	const getItemDetails = (id) => {
		for (let index = 0; index < menuItems.length; index++) {
			if (menuItems[index].id === id) return menuItems[index];
		}
	};

	return { getMenuItemsByType, getItemDetails };
};

export default useMenu;
