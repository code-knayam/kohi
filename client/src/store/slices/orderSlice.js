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

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
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

// export const {  } = order.actions;
export const orderReducer = orderSlice.reducer;
