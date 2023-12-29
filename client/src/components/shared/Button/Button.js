import "./Button.scss";

function Button({ type, handleOnClick, className, children }) {
	return (
		<button
			onClick={handleOnClick}
			className={` ${type === "secondary" && "secondary"} ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
