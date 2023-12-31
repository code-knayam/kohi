import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchMenu = createAsyncThunk("menu/fetch", async () => {
	const response = await axios.get(
		"http://127.0.0.1:5001/kohi-fcd46/us-central1/getItems"
	);
	return response.data;
});

const fetchCategories = createAsyncThunk("categories/fetch", async () => {
	const response = await axios.get(
		"http://127.0.0.1:5001/kohi-fcd46/us-central1/getCategories"
	);
	return response.data;
});

export { fetchMenu, fetchCategories };
