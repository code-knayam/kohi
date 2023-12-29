import { useNavigate } from "react-router-dom";
import Button from "../shared/Button/Button";
import CartItems from "../shared/CartItems/CartItems";
import "./Cart.scss";
import useCheckoutCart from "../../hooks/useCart";
import Loader from "../shared/Loader/Loader";
import { useState } from "react";

const CART_DETAILS = {
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

function Cart() {
	const navigate = useNavigate();
	const { purchaseCoffee } = useCheckoutCart();

	const [showLoader, setShowLoader] = useState(false);

	const onContinueToPay = async () => {
		setShowLoader(true);
		await purchaseCoffee(1);
		navigate("/cart/123");
		setShowLoader(false);
	};

	return (
		<div className="cart-container">
			{showLoader ? (
				<div class="cart-loader">
					<Loader />
				</div>
			) : (
				<>
					<div className="cart-contents-container cart-section">
						<CartItems orderDetails={CART_DETAILS} enableEdit={true} />
					</div>
					<Button
						handleOnClick={onContinueToPay}
						className="show-btn"
						type="secondary"
					>
						Continue To Pay
					</Button>
				</>
			)}
		</div>
	);
}

export default Cart;
