import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
	render() {
		return (
			<div className="text-center">
				<h1 className="display-3">Mailzy!</h1>
				<p className="lead">Collect Feedback from your Users</p>
				<Link to="/api/check">
					<button className="btn btn-info">Check</button>
				</Link>
			</div>
		);
	}
}

export default Landing;
