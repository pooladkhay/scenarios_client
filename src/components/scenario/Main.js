import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
	state = {
		isAuthenticated: false,
		color1: "",
		color2: "",
		color3: "",
		loading: true,
	};

	getScenario = async () => {
		try {
			const res = await axios.get("http://localhost:4004/api/scenarios/assign", {
				withCredentials: true,
			});

			if (!res.data.error) {
				this.setState({
					color1: res.data.scenario.color1,
					color2: "",
					color3: "",
					loading: false,
				});
			}
		} catch (error) {
			this.setState({
				loading: false,
			});
		}
	};

	getAllScenarios = async () => {
		try {
			const res = await axios.get("http://localhost:4004/api/scenarios/", {
				withCredentials: true,
			});

			if (!res.data.error) {
				this.setState({
					color1: res.data.scenarios.color1,
					color2: res.data.scenarios.color2,
					color3: res.data.scenarios.color3,
					loading: false,
				});
			}
		} catch (error) {}
	};

	componentDidMount() {
		this.getScenario();
		this.getAllScenarios();
	}
	componentWillUnmount() {
		this.setState({ loading: true });
	}

	renderColor = () => {
		const pageId = this.props.match.params.id;

		if (pageId) {
			if (this.state.loading) {
				return (
					<div className="d-flex justify-content-center">
						<div className="spinner-border text-secondary" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				);
			} else {
				if (pageId === "1") {
					return (
						<div
							style={{
								backgroundColor: this.state.color1,
								color: this.state.color1,
								position: "absolute",
								width: "100%",
								height: "100%",
								left: "0",
							}}
						>
							.
						</div>
					);
				} else if (pageId === "2") {
					return (
						<div
							style={{
								backgroundColor: this.state.color2,
								color: this.state.color2,
								position: "absolute",
								width: "100%",
								height: "100%",
								left: "0",
							}}
						>
							.
						</div>
					);
				} else if (pageId === "3") {
					return (
						<div
							style={{
								backgroundColor: this.state.color3,
								color: this.state.color3,
								position: "absolute",
								width: "100%",
								height: "100%",
								left: "0",
							}}
						>
							.
						</div>
					);
				}
			}
		} else {
			return <></>;
		}
	};

	render() {
		return this.renderColor();
	}
}
export default Main;
