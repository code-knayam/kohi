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
		addItem(state, action) {},
		removeItem(state, action) {},
	},
});

export const { addItem, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
