import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.scss";
import SelectableList from "../shared/SelectableList/SelectableList";
import Counter from "../shared/Counter/Counter";
import Button from "../shared/Button/Button";
import useMenu from "../../hooks/useMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/store";
import Price from "../shared/Price/Price";
import useCart from "../../hooks/useCart";

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

function ItemDetails() {
	const menu = useMenu();
	const cart = useCart();
	const dispatch = useDispatch();
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

	const handleAddToCart = async () => {
		const gasPrice = await cart.getGasPrice();
		dispatch(
			addItem({
				itemId: itemDetails.id,
				price: itemDetails.prices[itemSize],
				count: cartCount,
				size: SIZE_ITEMS[itemSize].label,
				gasPrice,
			})
		);
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
						<p className="price">
							<Price value={itemDetails?.prices?.[itemSize]} />
						</p>
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
