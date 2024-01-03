import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice";
import { fetchCategories, fetchMenu } from "./thunks/menuThunk";
import { cartReducer, addItem, removeItem } from "./slices/cartSlice";
import { orderReducer } from "./slices/orderSlice";

const store = configureStore({
	reducer: {
		menu: menuReducer,
		cart: cartReducer,
		order: orderReducer,
	},
});

export { store };
export { fetchCategories, fetchMenu, addItem, removeItem };
