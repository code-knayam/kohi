import "./MenuItem.scss";

function MenuItem({ menuItem, clickHandler }) {
	return (
		<div className="menu-item" onClick={clickHandler}>
			<div className="content">
				<p className="type">{menuItem.type}</p>
				<p className="name">{menuItem.name}</p>
			</div>
			<div className="image-container">
				<img src={menuItem.image} alt={menuItem.name} />
			</div>
		</div>
	);
}
export default MenuItem;
