import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import "./SelectableList.scss";
import { useState } from "react";
function SelectableList({ items, onSelect }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleOnClick = (item, index) => {
		setActiveIndex(index);
		onSelect(index);
	};

	return (
		<div className="selectable-list">
			{items.map((item, index) => {
				return (
					<div
						tabIndex={0}
						key={index}
						className={
							"selectable-item " +
							(activeIndex === index ? "active-selectable-item" : "")
						}
						onClick={() => {
							handleOnClick(item, index);
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
