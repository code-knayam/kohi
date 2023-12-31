/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions/logger");

const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const firebaseConfig = {
	apiKey: "AIzaSyCYG-RL1KAU_nV8dTMcppQaNPYBv2pHX64",
	authDomain: "kohi-fcd46.firebaseapp.com",
	databaseURL: "https://kohi-fcd46-default-rtdb.firebaseio.com",
	projectId: "kohi-fcd46",
	storageBucket: "kohi-fcd46.appspot.com",
	messagingSenderId: "398853462488",
	appId: "1:398853462488:web:33c54f82e28ac2cce23aad",
	measurementId: "G-JHLS7RLKE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

exports.createOrder = onRequest(async (req, res) => {
	const data = req.query.payload;

	const db = await getFirestore(app);
	const newOrderRef = db.collection("orders").doc();

	await newOrderRef.set(data);

	res.json({ result: "message with ID: added" });
});

exports.getItems = onRequest(async (req, res) => {
	const db = await getFirestore(app);
	const ordersRef = db.collection("items");

	const querySnapshot = await ordersRef.get();

	const items = [];

	querySnapshot.forEach((doc) => {
		items.push({ id: doc.id, ...doc.data() });
	});

	res.json(items);
});

exports.getCategories = onRequest(async (req, res) => {
	const db = await getFirestore(app);
	const categoriesRef = db.collection("categories");

	const querySnapshot = await categoriesRef.get();

	const categories = [];

	querySnapshot.forEach((doc) => {
		categories.push({ id: doc.id, ...doc.data() });
	});

	res.json(categories);
});

exports.setItems = onRequest(async (req, res) => {
	const db = await getFirestore(app);
	const promises = [];
	const menuItems = res.query.payload;
	menuItems.menu.forEach((item) => {
		const newItemRef = db.collection("items").doc();

		promises.push(newItemRef.set(item));
	});

	await Promise.all(promises);

	res.json("items added");
});
