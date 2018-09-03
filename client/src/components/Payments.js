import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
				name="Mailzy"
				description="$5 for five survey credit"
			>
				<button className="button-dark"> ADD CREDITS </button>
			</StripeCheckout>
		);
	}
}

export default connect(
	null,
	{ handleToken }
)(Payments);
