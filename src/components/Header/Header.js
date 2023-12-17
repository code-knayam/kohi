import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="greeting">Hello, User</div>
				<div className="balance_container">
					<div className="balance">123 eth</div>
				</div>
			</div>
		);
	}
}

export default Header;
