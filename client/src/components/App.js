import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Surveys from "./Surveys";
import Landing from "./Landing";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Surveys} />
					<Route exact path="/api/check" component={Surveys} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(
	null,
	actions
)(App);
