import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Main from "./components/Main";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";
import Scenario from "./components/scenario/Main";

class App extends React.Component {
	state = {
		currentUser: {},
		isAuthenticated: false,
		loading: true,
	};

	getCurrentUser = async () => {
		try {
			this.setState({ loading: true });
			const res = await axios.get("http://localhost:4004/api/users/current", {
				withCredentials: true,
			});

			if (!res.data.error) {
				this.setState({
					currentUser: res.data.user,
					isAuthenticated: true,
					loading: false,
				});
			} else {
				this.setState({ currentUser: {}, isAuthenticated: false, loading: false });
			}
		} catch (error) {
			this.setState({ currentUser: {}, isAuthenticated: false, loading: false });
		}
	};

	componentDidMount() {
		this.setState({ loading: true });
		this.getCurrentUser();
	}

	render() {
		return (
			<>
				<BrowserRouter>
					<Header
						currentUser={this.state.currentUser}
						isAuthenticated={this.state.isAuthenticated}
						loading={this.state.loading}
					/>
					<div className="container">
						<Route path="/" exact component={Main} />
						<Route
							path="/user/signup"
							exact
							component={() => <SignUp getCurrentUser={this.getCurrentUser} />}
						/>
						<Route
							path="/user/signin"
							exact
							component={() => <SignIn getCurrentUser={this.getCurrentUser} />}
						/>
						<Route
							path="/user/signout"
							exact
							component={() => <SignOut getCurrentUser={this.getCurrentUser} />}
						/>
						<Route path="/page/:id" exact component={Scenario} />
					</div>
				</BrowserRouter>
			</>
		);
	}
}
export default App;
