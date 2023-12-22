import "./ItemDetails.scss";
import image4 from "./../../assets/images/coffee-2.jpg";
import SelectableList from "../shared/SelectableList/SelectableList";
import Counter from "../shared/Counter/Counter";
import { useState } from "react";

const SIZE_ITEMS = [
	{
		id: 1,
		label: "250ml",
		size: "lg",
	},
	{
		id: 2,
		label: "350ml",
		size: "xl",
	},
	{
		id: 3,
		label: "450ml",
		size: "2xl",
	},
];

const ITEM_DETAILS = {
	img: image4,
	type: "Winter Special",
	name: "Capucino Latte",
	detail: "Comples, yet smooth flavour made to order.",
	prices: ["1.2", "2.4", "3.0"],
};

function ItemDetails() {
	const [cartCount, setCartCount] = useState(1);
	const [itemSize, setItemSize] = useState(0);

	const handleCartCountChange = (isAdd) => {
		const newCount = isAdd ? cartCount + 1 : cartCount - 1;
		setCartCount(newCount);
	};

	const onSizeSelect = (index) => {
		setItemSize(index);
	};

	const handleAddToCart = () => {};

	return (
		<div className="item-details">
			<div className="image-container">
				<img src={ITEM_DETAILS.img} alt="coffee" />
			</div>
			<div className="item-details-content">
				<div className="section">
					<h2 className="type">{ITEM_DETAILS.type}</h2>
					<p className="name">{ITEM_DETAILS.name}</p>
					<p className="details">{ITEM_DETAILS.detail}</p>

					<div className="size-selector">
						<p className="size-selector-label">Size</p>
						<SelectableList
							items={SIZE_ITEMS}
							onSelect={onSizeSelect}
						></SelectableList>
					</div>
				</div>
				<div className="section">
					<div className="price-container">
						<p className="price">$ {ITEM_DETAILS.prices[itemSize]}</p>
					</div>

					<div className="action-button-container">
						<div className="count-selector">
							<Counter
								minCount="1"
								maxCount="5"
								count={cartCount}
								updateCount={handleCartCountChange}
							/>
						</div>
						<div className="add-to-cart-container">
							<button onClick={handleAddToCart} className="add-to-cart-btn">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
