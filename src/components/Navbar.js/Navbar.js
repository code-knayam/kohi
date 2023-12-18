import { NavLink } from "react-router-dom";
import React, { Component, createRef } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faCartShopping,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

const NAV_ITEMS = [
	{
		id: 0,
		icon: faHome,
		link: "home",
	},
	{
		id: 1,
		icon: faCartShopping,
		link: "cart",
	},
	// {
	// 	id: 2,
	// 	icon: faHeart,
	// 	link: "favourites",
	// },
	{
		id: 3,
		icon: faUser,
		link: "profile",
	},
];

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.activeBorderRef = createRef();
	}

	componentDidMount() {
		this.setActiveBorderPosition();
	}

	setActiveBorderPosition() {
		setTimeout(() => {
			const activeNav = document.querySelectorAll(".active-nav-item");
			const left = activeNav[0].getBoundingClientRect().left;
			this.activeBorderRef.current.style.left = `${left}px`;
			this.activeBorderRef.current.style.display = "block";
		}, 200);
	}

	handleLinkClick = () => {
		this.setActiveBorderPosition();
	};

	renderNavItems() {
		return NAV_ITEMS.map((item, key) => {
			return (
				<li className="nav-item" key={key} onClick={this.handleLinkClick}>
					<NavLink
						to={item.link}
						className={({ isActive }) =>
							"link" + (isActive ? " active-nav-item" : "")
						}
					>
						<span className="icon">
							<FontAwesomeIcon icon={item.icon} size="lg" />
						</span>
					</NavLink>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="navbar">
				<ul className="nav-items">{this.renderNavItems()}</ul>
				<span ref={this.activeBorderRef} className="active-border"></span>
			</div>
		);
	}
}

export default Navbar;
