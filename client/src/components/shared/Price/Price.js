function Price({ value, currency = "USD" }) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		minimumFractionDigits: 2,
	});

	return <>{formatter.format(value)}</>;
}

export default Price;
