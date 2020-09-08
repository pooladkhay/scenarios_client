import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
	link = `/page/${this.props.number}`;

	renderCard = () => {
		if (this.props.disabled) {
			return (
				<div
					className="card"
					style={{
						width: "30%",
						height: "100px",
						margin: "10px",
						marginTop: "40px",
					}}
				>
					<div className="card-body disable-layer">
						{this.props.loading ? (
							<div className="d-flex justify-content-center">
								<div className="spinner-border text-secondary" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						) : null}
					</div>
				</div>
			);
		} else {
			return (
				<div
					className="card"
					style={{
						width: "30%",
						height: "100px",
						margin: "10px",
						marginTop: "40px",
						backgroundColor: this.props.color,
					}}
				>
					<Link to={this.link} className="link-layer">
						<div className="card-body">
							{this.props.loading ? (
								<div className="d-flex justify-content-center">
									<div className="spinner-border" role="status">
										<span className="sr-only"></span>
									</div>
								</div>
							) : null}
						</div>
					</Link>
				</div>
			);
		}
	};
	render() {
		return this.renderCard();
	}
}
