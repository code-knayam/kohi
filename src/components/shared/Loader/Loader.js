import "./Loader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Loader() {
	return (
		<div className="loader">
			<FontAwesomeIcon icon={faCircleNotch} spin size="5x" />
		</div>
	);
}

export default Loader;
