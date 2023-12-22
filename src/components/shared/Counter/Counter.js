import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";
import "./Counter.scss";

function Counter({ count, updateCount, minCount, maxCount }) {
	return (
		<div className="counter-container">
			<span
				role="button"
				tabIndex={0}
				aria-label="Decrease Count"
				className={"icon " + (count <= minCount ? "disabled" : "")}
				onKeyDown={(e) => {
					if (e.code === "Enter" && count > minCount) {
						updateCount(false);
					}
				}}
				onClick={() => {
					updateCount(false);
				}}
			>
				<FontAwesomeIcon icon={faSubtract} />
			</span>
			<span className="label">{count}</span>
			<span
				role="button"
				tabIndex={0}
				aria-label="Increase Count"
				className={"icon " + (count >= maxCount ? "disabled" : "")}
				onKeyDown={(e) => {
					if (e.code === "Enter" && count < maxCount) {
						updateCount(true);
					}
				}}
				onClick={() => {
					updateCount(true);
				}}
			>
				<FontAwesomeIcon icon={faAdd} />
			</span>
		</div>
	);
}

export default Counter;
