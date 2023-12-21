import "./ItemDetails.scss";
import image4 from "./../../assets/images/coffee-2.jpg";
import SelectableList from "../shared/SelectableList/SelectableList";
import Counter from "../shared/Counter/Counter";

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
	return (
		<div className="item-details">
			<div className="image-container">
				<img src={image4} alt="coffee" />
			</div>
			<div className="item-details-content">
				<div className="section">
					<h2 className="type">Winter Special</h2>
					<p className="name">Capucino Latte</p>
					<p className="details">Comples, yet smooth flavour made to order.</p>

					<div className="size-selector">
						<p className="size-selector-label">Size</p>
						<SelectableList items={SIZE_ITEMS}></SelectableList>
					</div>
				</div>
				<div className="section">
					<div className="price-container">
						<p className="price">$ 1.20</p>
					</div>

					<div className="action-button-container">
						<div className="count-selector">
							<Counter />
						</div>
						<div className="add-to-cart-container">
							<button className="add-to-cart-btn">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
