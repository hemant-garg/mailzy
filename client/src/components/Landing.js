import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
	render() {
		if (this.props.auth !== false) {
			this.props.history.push("/surveys");
		}
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
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Landing);
