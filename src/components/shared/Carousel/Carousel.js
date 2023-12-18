import { Component } from "react";
import "./Carousel.scss";

class Carousel extends Component {
	render() {
		return (
			<div className="carousel-container">
				<div className="carousel">
					<div className="carousel-item active">Popular</div>
					<div className="carousel-item">Popular</div>
					<div className="carousel-item">Popular</div>
					<div className="carousel-item">Popular</div>
					<div className="carousel-item">Popular</div>
					<div className="carousel-item">Popular</div>
					<div className="carousel-item ">Black Coffee</div>
				</div>
			</div>
		);
	}
}

export default Carousel;
