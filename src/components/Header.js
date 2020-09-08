import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	generateHeader = () => {
		if (this.props.isAuthenticated) {
			return (
				<>
					<ul className="nav d-flex align-items-center">
						<li
							key="name"
							className="nav-item"
							style={{ margin: "10px", fontSize: "14px" }}
						>
							{this.props.currentUser.name}
						</li>
						<div style={{ margin: "10px", fontSize: "14px", color: "#bbb" }}>|</div>
						<li
							key="points"
							className="nav-item"
							style={{ margin: "10px", fontSize: "14px" }}
						>
							Points: {this.props.currentUser.points}
						</li>
						<div style={{ margin: "10px", fontSize: "14px", color: "#bbb" }}>|</div>
						<li
							key="ref"
							className="nav-item"
							style={{ margin: "10px", fontSize: "14px" }}
						>
							Referal Code: {this.props.currentUser.uId}
						</li>
						<li key="links" className="nav-item">
							<Link to="/user/signout" className="nav-link">
								Sign Out
							</Link>
						</li>
					</ul>
				</>
			);
		} else {
			return (
				<ul className="nav d-flex align-items-center">
					<li key="link1" className="nav-item">
						<Link to="/user/signup" className="nav-link">
							Sign Up
						</Link>
					</li>
					<li key="link2" className="nav-item">
						<Link to="/user/signin" className="nav-link">
							Sign In
						</Link>
					</li>
				</ul>
			);
		}
	};

	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					ScenarioS
				</Link>
				{this.props.loading ? (
					<div className="d-flex justify-content-center">
						<div className="spinner-border text-secondary" role="status">
							<span className="sr-only"></span>
						</div>
					</div>
				) : (
					<div className="d-flex justify-content-end">{this.generateHeader()}</div>
				)}
			</nav>
		);
	}
}
export default Header;
