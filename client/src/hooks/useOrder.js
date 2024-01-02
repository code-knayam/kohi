import useEthContext from "./useEthContext";
import useMenu from "./useMenu";

const useOrder = () => {
	const { accountDetails, ethState } = useEthContext();
	const menu = useMenu();

	const getOrderDetails = async (val) => {
		const order = await ethState.contract.methods
			.getOrderInfo(accountDetails.acc, "0")
			.call();
		console.log({ order });
	};

	return { getOrderDetails };
};

export default useOrder;
