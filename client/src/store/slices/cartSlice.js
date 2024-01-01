import { createSlice } from "@reduxjs/toolkit";

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
	},
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

			state.price.total =
				state.price.subTotal + state.price.packingFee - state.price.discount;
		},
		removeItem(state, action) {},
	},
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
