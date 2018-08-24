import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Dashboard </h1>
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
