import React from "react";
import { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const SignIn = ({ history, getCurrentUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const doRequest = async () => {
		try {
			await axios.post(
				"http://localhost:4004/api/users/signin",
				{
					email,
					password,
				},
				{ withCredentials: true }
			);
			setLoading(false);
			getCurrentUser();
			history.push("/");
		} catch (err) {
			setLoading(false);
			setErrors(err.response.data);
			// console.log(err.response.data);
		}
	};

	const renderErrors = () => {
		if (errors.error) {
			return (
				<div className="alert alert-danger" role="alert">
					{errors.message}
				</div>
			);
		} else {
			return <></>;
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setErrors({});
		doRequest();
	};

	return (
		<form onSubmit={onSubmit}>
			<h1>Sign In</h1>
			<div className="form-group">
				<label>Email Address</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					className="form-control"
				/>
			</div>
			{/* {errors} */}
			{loading ? (
				<button className="btn btn-primary" type="button" disabled>
					<span
						className="spinner-border spinner-border-sm"
						role="status"
						aria-hidden="true"
					></span>
				</button>
			) : (
				<button className="btn btn-primary">Sign In</button>
			)}
			<div className="form-group">
				<label></label>
				{renderErrors()}
			</div>
		</form>
	);
};
export default withRouter(SignIn);
