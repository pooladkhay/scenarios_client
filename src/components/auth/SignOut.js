import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const SignOut = ({ history, getCurrentUser }) => {
	const doRequest = async () => {
		try {
			await axios.post(
				"http://localhost:4004/api/users/signout",
				{},
				{ withCredentials: true }
			);
			getCurrentUser();
			history.push("/");
			// console.log(res);
		} catch (error) {
			// console.log(error);
		}
	};

	useEffect(() => {
		doRequest();
	});

	return <div>Signing you out...</div>;
};

export default withRouter(SignOut);
