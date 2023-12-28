import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import "./Header.scss";
import { useState } from "react";
import Button from "../shared/Button/Button";
import useEthContext from "../../hooks/useEthContext";

function Header() {
	const { ethState, updateAccount } = useEthContext();
	const [isMetaMaskConnected, setMetaMaskConnected] = useState(false);
	const [balance, setBalance] = useState(0);

	const onConnecetMetaMask = async () => {
		let provider = window.ethereum;
		if (provider) {
			await provider.request({ method: "eth_requestAccounts" });

			const web3 = ethState.web;
			const accounts = await web3.eth.getAccounts();
			const bal = await web3.eth.getBalance(accounts[0]);
			const balInEther = web3.utils.fromWei(bal, "ether");

			setBalance(Math.floor(balInEther));
			updateAccount(accounts[0], balance);
			setMetaMaskConnected(true);
		} else {
			console.log("please install metamask");
		}
	};

	const renderBalance = () => {
		if (isMetaMaskConnected) {
			return (
				<div className="balance-container">
					<div className="balance">
						{balance} <FontAwesomeIcon icon={faEthereum} />
					</div>
				</div>
			);
		} else {
			return (
				<div className="connect-btn">
					<Button type="secondary" handleOnClick={onConnecetMetaMask}>
						Connect MetaMask
					</Button>
				</div>
			);
		}
	};

	return (
		<div className="header">
			<div className="greeting">
				<span className="icon">
					<FontAwesomeIcon icon={faMugHot} className="fa-beat" size="lg" />
				</span>
				<span className="name">Hello, User</span>
			</div>
			{renderBalance()}
		</div>
	);
}

export default Header;
