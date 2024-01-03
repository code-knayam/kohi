import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Orders.scss";
import Button from "../shared/Button/Button";
import CartItems from "../shared/CartItems/CartItems";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOrder from "../../hooks/useOrder";
import Loader from "../shared/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../store/store";

function Orders() {
	const useOrderHook = useOrder();
	const dispatch = useDispatch();

	const [orderDetails, setOrderDetails] = useState(null);
	const { id } = useParams();
	const [showLoader, setShowLoader] = useState(true);

	const { loading, error, orderFetched, order } = useSelector(({ order }) => {
		return order;
	});

	useEffect(() => {
		console.log("loading", loading);

		setShowLoader(loading);
	}, [loading]);

	useEffect(() => {
		if (orderFetched) {
			setOrderDetails(order);
		}
	}, [orderFetched]);

	useEffect(() => {
		async function getOrder() {
			// const details = useOrderHook.getOrderDetails(id);
			dispatch(getOrderDetails(id));
			setShowLoader(false);
		}

		setShowLoader(true);
		getOrder();
	}, [id]);

	return (
		<>
			{showLoader ? (
				<div class="cart-loader">
					<Loader />
				</div>
			) : (
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
						<span id="order-id">{orderDetails.orderId}</span>
					</div>
					<div className="cart-contents-container cart-section">
						<CartItems orderDetails={orderDetails} />
					</div>
					<Button className="show-btn" type="secondary">
						Show Transaction Hash
					</Button>
				</div>
			)}
		</>
	);
}
export default Orders;
