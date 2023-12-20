import "./ItemDetails.scss";
import image4 from "./../../assets/images/coffee-2.jpg";

function ItemDetails() {
	return (
		<div className="item-details">
			<div className="image-container">
				<img src={image4} alt="coffee" />
			</div>
			<div className="item-details-content">
				<h2 className="type">Winter Special</h2>
				<p className="name">Capucino Latte</p>
				<p className="details">Comples, yet smooth flavour made to order.</p>

				{/* <div className="size-selector"></div>
				<div className="price-container">
					<p className="price">$ 1.20</p>
				</div>

				<div className="action-button-container">
					<div className="count-selector">1</div>
					<div className="add-to-cart-container">
						<button className="add-to-cart-btn">Add to Cart</button>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default ItemDetails;
