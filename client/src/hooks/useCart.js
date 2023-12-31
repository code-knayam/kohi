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
				.purchaseCoffee(123, 321, cartDetails.count)
				.send({
					from: accountDetails.acc,
					value: cartDetails.price.totalEth,
					gas: cartDetails.price.gasFee,
				});
			console.log(bl);
		} catch (e) {
			console.log(e);
		}
	};

	const getCartDetails = async () => {
		const cart = {};
		console.log(cartDetails);
		cart.items = cartDetails.items.map((item) => {
			const details = menu.getItemDetails(item.id);
			return { ...item, name: details.name };
		});

		cart.price = { ...cartDetails.price };
		cart.count = cartDetails.count;
		console.log(cart);
		return cart;
	};

	const getGasPrice = async () => {
		// const gasPrice = await ethState.web.eth.getGasPrice();
		// const gasPriceInWei = ethState.web.utils.fromWei(gasPrice, "ether");
		return 1000000;
	};

	return { purchaseCoffee, getCartDetails, getGasPrice };
};

export default useCart;
