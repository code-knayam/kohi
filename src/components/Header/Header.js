import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import "./Header.scss";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="greeting">
					<span className="icon">
						<FontAwesomeIcon icon={faMugHot} className="fa-beat" size="lg" />
					</span>
					<span className="name">Hello, User</span>
				</div>
				<div className="balance-container">
					<div className="balance">
						123 <FontAwesomeIcon icon={faEthereum} />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
