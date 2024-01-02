import { useNavigate } from "react-router-dom";
import Button from "../shared/Button/Button";
import CartItems from "../shared/CartItems/CartItems";
import "./Cart.scss";
import useCart from "../../hooks/useCart";
import Loader from "../shared/Loader/Loader";
import { useEffect, useState } from "react";

function Cart() {
	const navigate = useNavigate();
	const { purchaseCoffee } = useCart();
	const cart = useCart();

	const [cartDetails, setCartDetails] = useState(null);
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		async function getCartDetails() {
			const details = await cart.getCartDetails();
			setCartDetails(details);
		}
		getCartDetails();
	}, []);

	const onContinueToPay = async () => {
		setShowLoader(true);
		await purchaseCoffee();
		navigate("/cart/123");
		setShowLoader(false);
	};

	return (
		<div className="cart-container">
			{showLoader ? (
				<div class="cart-loader">
					<Loader />
				</div>
			) : cartDetails && cartDetails.count > 0 ? (
				<>
					<div className="cart-contents-container cart-section">
						<CartItems orderDetails={cartDetails} enableEdit={true} />
					</div>
					<Button
						handleOnClick={onContinueToPay}
						className="show-btn"
						type="secondary"
					>
						Continue To Pay
					</Button>
				</>
			) : (
				<p>Add something to cart</p>
			)}
		</div>
	);
}

export default Cart;
