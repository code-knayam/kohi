import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faCartShopping,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

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

function Navbar() {
	const activeBorderRef = useRef();

	useEffect(() => {
		setActiveBorderPosition();
	}, []);

	const setActiveBorderPosition = () => {
		setTimeout(() => {
			const activeNav = document.querySelectorAll(".active-nav-item");
			const left = activeNav[0].getBoundingClientRect().left;
			activeBorderRef.current.style.left = `${left}px`;
			activeBorderRef.current.style.display = "block";
		}, 200);
	};

	const handleLinkClick = () => {
		setActiveBorderPosition();
	};

	const renderNavItems = () => {
		return NAV_ITEMS.map((item, key) => {
			return (
				<li className="nav-item" key={key} onClick={handleLinkClick}>
					<NavLink
						to={item.link}
						className={({ isActive }) =>
							`link ${isActive && " active-nav-item"}`
						}
					>
						<span className="icon">
							<FontAwesomeIcon icon={item.icon} size="lg" />
						</span>
					</NavLink>
				</li>
			);
		});
	};

	return (
		<div className="navbar">
			<ul className="nav-items">{renderNavItems()}</ul>
			<span ref={activeBorderRef} className="active-border"></span>
		</div>
	);
}

export default Navbar;
