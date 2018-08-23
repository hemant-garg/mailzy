import React, { Component } from "react";

class Landing extends Component {
	render() {
		return (
			<div className="text-center">
				<h1 className="display-3">Mailzy!</h1>
				<p className="lead">Collect Feedback from your Users</p>
				<a href="/api/check">
					<button className="btn btn-info">Check</button>
				</a>
			</div>
		);
	}
}

export default Landing;
