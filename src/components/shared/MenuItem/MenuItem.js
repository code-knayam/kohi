import "./MenuItem.scss";
import image from "./../../../assets/images/coffee-1.png";

function MenuItem() {
	return (
		<div className="menu-item">
			<div className="content">
				<p className="type">Black Coffee</p>
				<p className="name">Iced Americano</p>
			</div>
			<div className="image-container">
				<img src={image} alt="" />
			</div>
		</div>
	);
}
export default MenuItem;
