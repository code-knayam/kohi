import "./MenuItem.scss";

function MenuItem({ menuItem }) {
	return (
		<div className="menu-item">
			<div className="content">
				<p className="type">{menuItem.type}</p>
				<p className="name">{menuItem.name}</p>
			</div>
			<div className="image-container">
				<img src={menuItem.img} alt={menuItem.name} />
			</div>
		</div>
	);
}
export default MenuItem;
