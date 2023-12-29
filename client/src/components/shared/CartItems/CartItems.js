import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItems.scss";

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
		return orderDetails.order_items.map((item) => {
			return (
				<div className="order-item">
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
					<div className="item-price">{item.totalPrice}</div>
					{renderDeleteIcon(item)}
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
					<span className="price">{orderDetails.price.subTotal}</span>
				</div>

				<div className="price-item">
					<span className="label">Packing Fee</span>
					<span className="price">{orderDetails.price.packingFee}</span>
				</div>
				<div className="price-item">
					<span className="label">Discount</span>
					<span className="price">{orderDetails.price.discount}</span>
				</div>

				<div className="price-item total-price">
					<span className="label">Total</span>
					<span className="price">{orderDetails.price.total}</span>
				</div>
			</div>
		</>
	);
}
export default CartItems;
