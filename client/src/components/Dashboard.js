import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
	render() {
		return (
			<div>
				<SurveyList />
				<Link to="/survey/new" className="button-add">
					<i class="fas fa-plus fa-3x" />
				</Link>
			</div>
		);
	}
}

export default Dashboard;
