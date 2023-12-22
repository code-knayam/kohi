import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";

function Cart() {
	return (
		<div className="cart-container">
			<div className="greeting-container">
				<span className="icon">
					<FontAwesomeIcon icon={faCheck} />
				</span>
				<h2>Thank You</h2>
				<p>Your transaction was successfull</p>
			</div>
			<div className="order-id-container">
				<div className="order-id"></div>
			</div>
		</div>
	);
}
export default Cart;
