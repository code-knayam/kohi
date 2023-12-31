import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.scss";
import image4 from "./../../assets/images/coffee-2.jpg";
import SelectableList from "../shared/SelectableList/SelectableList";
import Counter from "../shared/Counter/Counter";
import Button from "../shared/Button/Button";
import { useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

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
	const navigate = useNavigate();
	const menu = useMenu();
	const { id } = useParams();

	const [cartCount, setCartCount] = useState(1);
	const [itemSize, setItemSize] = useState(0);
	const [itemDetails, setItemDetails] = useState({});

	useEffect(() => {
		const details = menu.getItemDetails(id);
		setItemDetails(details);
	}, [id]);

	const handleCartCountChange = (isAdd) => {
		const newCount = isAdd ? cartCount + 1 : cartCount - 1;
		setCartCount(newCount);
	};

	const onSizeSelect = (index) => {
		setItemSize(index);
	};

	const handleAddToCart = () => {
		navigate("/cart");
	};

	return (
		<div className="item-details">
			<div className="image-container">
				<img src={itemDetails.image} alt="coffee" />
			</div>
			<div className="item-details-content">
				<div className="section">
					<h2 className="type">{itemDetails.type}</h2>
					<p className="name">{itemDetails.name}</p>
					<p className="details">{itemDetails.detail}</p>

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
						<p className="price">$ {itemDetails?.prices?.[itemSize]}</p>
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
							<Button handleOnClick={handleAddToCart}>Add to cart</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
