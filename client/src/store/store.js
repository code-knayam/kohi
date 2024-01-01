import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice";
import { fetchCategories, fetchMenu } from "./thunks/menuThunk";
import { cartReducer, addItem, removeItem } from "./slices/cartSlice";

const store = configureStore({
	reducer: {
		menu: menuReducer,
		cart: cartReducer,
	},
});

export { store };
export { fetchCategories, fetchMenu, addItem, removeItem };
