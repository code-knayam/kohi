import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Profile.scss";
import {
	faArrowRightFromBracket,
	faChevronCircleRight,
	faCircleInfo,
	faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "./../../assets/images/profile.jpg";

function Profile() {
	return (
		<div className="profile-container">
			<div className="top-banner">
				<img className="profile-pic" src={profilePic} alt="profile pic" />
			</div>

			<div className="profile-details">
				<p className="name">John Smith</p>
				<p className="email">johnsmith@gmail.com</p>
			</div>

			<div className="links-container">
				<div className="link-item">
					<FontAwesomeIcon icon={faReceipt} />
					<span>Order History</span>
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</div>
				<div className="link-item">
					<FontAwesomeIcon icon={faCircleInfo} />
					<span>About KOHI</span>
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</div>
				<div className="link-item signout">
					<FontAwesomeIcon icon={faArrowRightFromBracket} />
					<span>Sign Out</span>
					<FontAwesomeIcon icon={faChevronCircleRight} />
				</div>
			</div>
		</div>
	);
}
export default Profile;
