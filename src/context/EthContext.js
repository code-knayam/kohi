import { createContext, useCallback, useEffect, useState } from "react";
import cartSaleContract from "../contracts/CartSale.json";
import Web3 from "web3";

const EthContext = createContext();

function EthProvider({ children }) {
	const [ethState, setEthState] = useState({
		artifact: null,
		web: null,
		networkId: null,
		contract: null,
	});

	const [accountDetails, setAccountDetails] = useState({
		acc: null,
		balance: null,
	});

	const init = useCallback(async (artifact) => {
		if (artifact) {
			const web3 = new Web3(window.ethereum);
			const networkId = await web3.eth.net.getId();
			const abi = artifact.abi;
			let address, contract;
			try {
				address = artifact.networks[networkId].address;
				contract = new web3.eth.Contract(abi, address);
				console.log(networkId, abi, contract, address);
			} catch (err) {
				console.error(err);
			}
			setEthState({ artifact, web: web3, networkId, contract });
		}
	}, []);

	const updateAccount = (acc, balance) => {
		setAccountDetails({
			acc,
			balance,
		});
	};

	useEffect(() => {
		console.log("start init");
		init(cartSaleContract);
	}, [init]);

	useEffect(() => {
		const events = ["chainChanged", "accountsChanged"];
		const handleChange = () => {
			init(cartSaleContract);
		};

		events.forEach((e) => window.ethereum.on(e, handleChange));
		return () => {
			events.forEach((e) => window.ethereum.removeListener(e, handleChange));
		};
	}, [init, cartSaleContract]);

	const providerValue = {
		ethState,
		accountDetails,
		updateAccount,
	};

	return (
		<EthContext.Provider value={providerValue}>{children}</EthContext.Provider>
	);
}

export { EthProvider };
export default EthContext;
