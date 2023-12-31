import { useState } from "react";
import "./Carousel.scss";

function Carousel({ items, handleOnItemClick }) {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const handleOnClick = (index, item) => {
		setActiveItemIndex(index);
		handleOnItemClick(item);
	};

	return (
		<div className="carousel-container">
			<div className="carousel">
				{items.map((item, index) => {
					return (
						<div
							key={index}
							className={`carousel-item ${
								activeItemIndex === index && "active-carousel-item"
							}`}
							onClick={() => handleOnClick(index, item)}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Carousel;
