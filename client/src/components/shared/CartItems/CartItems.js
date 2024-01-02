import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faMultiply, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItems.scss";
import Price from "../Price/Price";

function CartItems({ orderDetails, enableEdit }) {
	const renderDeleteIcon = () => {
		if (!enableEdit) return;

		return (
			<span className="item-delete-icon">
				<FontAwesomeIcon icon={faTrash} />
			</span>
		);
	};

	const renderOrderItems = () => {
		return orderDetails.items.map((item, index) => {
			return (
				<div className="order-item" key={index}>
					<div className="item-info">
						<div className="item-desc">
							<span className="count">{item.count}</span>
							<span className="icon">
								<FontAwesomeIcon icon={faMultiply} />
							</span>
							<span className="item-name">{item.name}</span>
						</div>
						<span className="size">{item.size}</span>
					</div>
					<div className="item-price">
						<Price value={item.totalPrice} />
						{renderDeleteIcon(item)}
					</div>
				</div>
			);
		});
	};

	return (
		<>
			<p className="label">Your Order</p>
			<div className="order-items">{renderOrderItems()}</div>
			<div className="cart-price-container">
				<div className="price-item">
					<span className="label">Sub Total</span>
					<span className="price">
						<Price value={orderDetails.price.subTotal} />
					</span>
				</div>

				<div className="price-item">
					<span className="label">Packing Fee</span>
					<span className="price">
						<Price value={orderDetails.price.packingFee} />
					</span>
				</div>
				<div className="price-item">
					<span className="label">Discount</span>
					<span className="price">
						- <Price value={orderDetails.price.discount} />
					</span>
				</div>

				<div className="price-item total-price">
					<span className="label">Total</span>
					<span className="price">
						<Price value={orderDetails.price.total} />
					</span>
				</div>

				<div className="price-item ">
					<span className="label">
						<FontAwesomeIcon icon={faEthereum} />
						Price
					</span>
					<span className="price">
						<Price currency="ETH" value={orderDetails.price.priceInEth} />
					</span>
				</div>

				<div className="price-item ">
					<span className="label">
						<FontAwesomeIcon icon={faEthereum} />
						Gas Fee
					</span>
					<span className="price">
						<Price currency="ETH" value={orderDetails.price.gasFee} />
					</span>
				</div>

				<div className="price-item total-price">
					<span className="label">
						<FontAwesomeIcon icon={faEthereum} />
						Total WEI
					</span>
					<span className="price">
						<Price currency="ETH" value={orderDetails.price.totalEth} />
					</span>
				</div>
			</div>
		</>
	);
}
export default CartItems;
