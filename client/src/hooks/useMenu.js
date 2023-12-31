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

	return { getMenuItemsByType };
};

export default useMenu;
