import useEthContext from "../hooks/useEthContext";

const useCheckoutCart = () => {
	const { accountDetails, ethState } = useEthContext();

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

	return { purchaseCoffee };
};

export default useCheckoutCart;
