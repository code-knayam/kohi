import { useState } from "react";
import "./Carousel.scss";

function Carousel({ items }) {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const handleOnClick = (index) => {
		setActiveItemIndex(index);
	};

	return (
		<div className="carousel-container">
			<div className="carousel">
				{items.map((item, index) => {
					return (
						<div
							key={item.id}
							className={`carousel-item ${
								activeItemIndex === index && "active-carousel-item"
							}`}
							onClick={() => handleOnClick(index)}
						>
							{item.label}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Carousel;
