import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
	render() {
		if (this.props.auth === false) {
			this.props.history.push("/");
		}
		return (
			<div>
				<SurveyList />
				<Link to="/survey/new" className="button-add">
					<i className="fas fa-plus fa-3x" />
				</Link>
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Dashboard);
