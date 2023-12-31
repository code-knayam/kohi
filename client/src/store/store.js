import { configureStore } from "@reduxjs/toolkit";
import {
	menuReducer,
	fetchAllItems,
	getMenuItemsByType,
	getItemDetails,
} from "./slices/menuSlice";
import { fetchCategories, fetchMenu } from "./thunks/menuThunk";

const store = configureStore({
	reducer: {
		menu: menuReducer,
	},
});

export { store, fetchAllItems, getMenuItemsByType, getItemDetails };
export { fetchCategories, fetchMenu };
