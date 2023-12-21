import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import "./SelectableList.scss";
function SelectableList({ items }) {
	const onHandleClick = (item) => {};

	return (
		<div className="selectable-list">
			{items.map((item, index) => {
				return (
					<div
						className="selectable-item"
						onClick={() => {
							onHandleClick(item);
						}}
					>
						<FontAwesomeIcon
							className="icon"
							icon={faMugSaucer}
							size={item.size}
						/>
						<span className="item-label">{item.label}</span>
					</div>
				);
			})}
		</div>
	);
}

export default SelectableList;
