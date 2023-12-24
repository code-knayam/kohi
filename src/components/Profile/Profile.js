import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Profile.scss";
import {
	faArrowRightFromBracket,
	faChevronCircleRight,
	faCircleInfo,
	faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import profilePic from "./../../assets/images/profile.jpg";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

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
					<span>
						<FontAwesomeIcon icon={faReceipt} />
					</span>
					<span>Order History</span>
					<span className="right-icon">
						<FontAwesomeIcon icon={faChevronCircleRight} />
					</span>
				</div>
				<div className="link-item">
					<span>
						<FontAwesomeIcon icon={faCircleInfo} />
					</span>
					<span>About KOHI</span>
					<span className="right-icon">
						<FontAwesomeIcon icon={faChevronCircleRight} />
					</span>
				</div>
				<div className="link-item">
					<span>
						<FontAwesomeIcon icon={faEthereum} />
					</span>
					<span>Disconnect MetaMask</span>
					<span className="right-icon">
						<FontAwesomeIcon icon={faChevronCircleRight} />
					</span>
				</div>
				<div className="link-item signout">
					<span>
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
					</span>
					<span>Sign Out</span>
					<span className="right-icon">
						<FontAwesomeIcon icon={faChevronCircleRight} />
					</span>
				</div>
			</div>
		</div>
	);
}
export default Profile;
