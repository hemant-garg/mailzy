import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

class NewSurvey extends Component {
	state = { showFormReview: false };
	render() {
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

export default reduxForm({
	form: "surveyForm"
})(NewSurvey);
