import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Orders.scss";
import Button from "../shared/Button/Button";
import CartItems from "../shared/CartItems/CartItems";

const ORDER_DETAILS = {
	orderId: "12434",
	transactionHash: "asdasd121231",
	price: {
		subTotal: "4.95",
		packingFee: "2",
		discount: "1",
		total: "5.95",
	},
	order_items: [
		{
			name: "Cappucino latte",
			count: "2",
			size: "small",
			totalPrice: "4.8",
		},
		{
			name: "Cappucino latte",
			count: "1",
			size: "large",
			totalPrice: "3",
		},
	],
};

function Orders() {
	return (
		<div className="order-container">
			<div className="greeting-container cart-section">
				<span className="icon">
					<FontAwesomeIcon icon={faCheck} size="2x" />
				</span>
				<h2 className="heading">Thank You</h2>
				<p className="message">Your transaction was successfull</p>
			</div>
			<div className="order-id-container cart-section">
				<span className="label">Order Id</span>
				<span id="order-id">{ORDER_DETAILS.orderId}</span>
			</div>
			<div className="cart-contents-container cart-section">
				<CartItems orderDetails={ORDER_DETAILS} />
			</div>
			<Button className="show-btn" type="secondary">
				Show Transaction Hash
			</Button>
		</div>
	);
}
export default Orders;
