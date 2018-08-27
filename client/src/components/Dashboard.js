import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
	render() {
		return (
			<div>
				<SurveyList />
				<Link to="/survey/new">
					<button
						type="button"
						className="rounded-circle btn btn-lg position-fixed btn-info"
						style={{
							bottom: "3rem",
							right: "3rem",
							fontSize: "1.7rem"
						}}
					>
						+
					</button>
				</Link>
			</div>
		);
	}
}

export default Dashboard;
