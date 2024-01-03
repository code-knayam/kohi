import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createOrder = createAsyncThunk("cart/create", async (data) => {
	const response = await axios.post(
		"http://127.0.0.1:5001/kohi-fcd46/us-central1/createOrder",
		data
	);
	return response.data;
});

const getOrderDetails = createAsyncThunk("cart/details", async (data) => {
	const response = await axios.get(
		`http://127.0.0.1:5001/kohi-fcd46/us-central1/getOrderDetails/${data}`
	);
	return response.data;
});

export { createOrder, getOrderDetails };
