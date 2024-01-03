import { createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrderDetails } from "../thunks/cartThunk";

const initialState = {
	items: [],
	count: 0,
	price: {
		subTotal: 0,
		packingFee: 0,
		discount: 0,
		total: 0,
		gasFee: 0,
		priceInEth: 0,
		totalEth: 0,
	},
	error: null,
	loading: false,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			console.log(action.payload);
			const order = action.payload;

			state.count += order.count;
			state.items.push({
				id: order.itemId,
				size: order.size,
				count: order.count,
				price: order.price,
				totalPrice: order.count * order.price,
			});

			const totalOrderPrice = order.count * order.price;
			state.price.subTotal += totalOrderPrice;
			state.price.discount = 0.01 * state.price.subTotal;
			state.price.packingFee += 0.02 * order.count;

			state.price.total =
				state.price.subTotal + state.price.packingFee - state.price.discount;

			state.price.gasFee = order.gasPrice;
			state.price.priceInEth = state.price.total * 5073500;

			state.price.totalEth = Math.ceil(
				state.price.gasFee + state.price.priceInEth
			);
		},
		removeItem(state, action) {},
		cartOrdered(state, action) {
			state.items = [];
			state.count = 0;
			state.price = initialState.price;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createOrder.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createOrder.rejected, (state, action) => {
			state.loading = false;
		});
		builder.addCase(createOrder.fulfilled, (state, action) => {
			state.loading = false;
		});

		builder.addCase(getOrderDetails.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getOrderDetails.rejected, (state, action) => {
			state.loading = false;
		});
		builder.addCase(getOrderDetails.fulfilled, (state, action) => {
			state.loading = false;
		});
	},
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
