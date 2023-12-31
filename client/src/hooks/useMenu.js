import { useSelector } from "react-redux";

const useMenu = () => {
	const { menuItems } = useSelector(({ menu }) => {
		return menu;
	});

	const getMenuItemsByType = (type) => {
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
