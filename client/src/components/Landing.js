import React, { Component } from "react";

class Landing extends Component {
	render() {
		return (
			<section className="landing">
				<h1 className="landing--title">Mailzy!</h1>
				<p className="landing--sub-title">
					Collect Feedback from your Users
				</p>
				<p className="landing--app-det">
					{" "}
					The app that can be used to send mass emails to a big list
					of users for the purpose of collecting feedback.{" "}
				</p>
				<a href="/auth/google">
					<button className="button-dark-2">Get Started</button>
				</a>
			</section>
		);
	}
}

export default Landing;
