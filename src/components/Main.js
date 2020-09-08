import React, { Component } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import ScenarioCard from "./scenario/Card";

class Main extends Component {
	state = {
		isAuthenticated: false,
		color1: "",
		color2: "",
		color3: "",
		loading1: true,
		loading2: true,
		loading3: true,
	};

	getScenario = async () => {
		try {
			const res = await axios.get("http://localhost:4004/api/scenarios/assign", {
				withCredentials: true,
			});
			if (!res.data.error) {
				this.setState({ color1: res.data.scenario.color1, loading1: false });
			} else {
				cogoToast.error(res.data.message);
				this.setState({ loading1: false });
			}
		} catch (err) {}
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
					loading1: false,
					loading2: false,
					loading3: false,
				});
			}
		} catch (error) {
			this.setState({
				// loading1: false,
				loading2: false,
				loading3: false,
			});
		}
	};

	componentDidMount() {
		this.getScenario();
		this.getAllScenarios();
	}

	render() {
		return (
			<div style={{ display: "flex" }}>
				<ScenarioCard
					number="1"
					color={this.state.color1}
					disabled={!this.state.color1}
					loading={this.state.loading1}
				/>
				<ScenarioCard
					number="2"
					color={this.state.color2}
					disabled={!this.state.color2}
					loading={this.state.loading2}
				/>
				<ScenarioCard
					number="3"
					color={this.state.color3}
					disabled={!this.state.color3}
					loading={this.state.loading3}
				/>
			</div>
		);
	}
}
export default Main;
