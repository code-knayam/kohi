import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchMenu } from "../thunks/menuThunk";
import createImagePath from "../../utils/image-path-util";
import { CONSTANTS } from "../../utils/app-constants";

const initialState = {
	menuItems: [],
	categories: [],
	loading: true,
	error: null,
};

export const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMenu.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchMenu.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error;
		});
		builder.addCase(fetchMenu.fulfilled, (state, action) => {
			state.loading = false;
			const payload = action.payload;
			const items = payload.map((item) => {
				item.image = createImagePath(item.type);
				return item;
			});
			state.menuItems = items;
		});
		builder.addCase(fetchCategories.pending, (state, action) => {
			// state.loading = true;
		});
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.error = action.error;
		});
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			const data = action.payload;
			state.categories = [CONSTANTS.RECOMMENDED, ...data[0].categories] || [];
		});
	},
});

export const { fetchAllItems, getMenuItemsByType, getItemDetails } =
	menuSlice.actions;

export const menuReducer = menuSlice.reducer;
