function Price({ value, currency = "USD" }) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency === "ETH" ? "WEI" : currency,
		minimumFractionDigits: currency === "ETH" ? 3 : 2,
	});

	return <>{formatter.format(value)}</>;
}

export default Price;
