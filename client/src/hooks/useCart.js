import { useSelector } from "react-redux";
import useEthContext from "../hooks/useEthContext";
import useMenu from "./useMenu";

const useCart = () => {
	const { accountDetails, ethState } = useEthContext();
	const menu = useMenu();

	const cartDetails = useSelector(({ cart }) => {
		return cart;
	});

	const purchaseCoffee = async (val) => {
		try {
			const bl = await ethState.contract.methods
				.purchaseCoffee(1, 123, 321, 1)
				.send({
					from: accountDetails.acc,
					value: 1000000000000000000,
					gas: 1000000,
				});
			console.log(bl);
		} catch (e) {
			console.log(e);
		}
	};

	const getCartDetails = () => {
		const cart = {};
		console.log(cartDetails);
		cart.items = cartDetails.items.map((item) => {
			const details = menu.getItemDetails(item.id);
			return { ...item, name: details.name };
		});

		cart.price = cartDetails.price;
		cart.count = cartDetails.count;
		console.log(cart);
		return cart;
	};

	return { purchaseCoffee, getCartDetails };
};

export default useCart;
