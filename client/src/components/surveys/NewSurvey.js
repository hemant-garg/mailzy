import React, { Component } from "react";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

class NewSurvey extends Component {
	state = { showFormReview: false };

	render() {
		if (this.props.auth === false) {
			this.props.history.push("/");
		}
		if (this.state.showFormReview) {
			return (
				<SurveyFormReview
					onClickBack={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default reduxForm({
	form: "surveyForm"
})(connect(mapStateToProps)(NewSurvey));
