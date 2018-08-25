import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { submitSurvey } from "../../actions";
import formFields from "./formFields";

const SurveyFormReview = ({
	onClickBack,
	formValues,
	submitSurvey,
	history
}) => {
	const renderReview = formFields.map(({ label, name }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h4>Please Confirm your entries</h4>
			{renderReview}
			<button className="btn btn-danger" onClick={onClickBack}>
				Back
			</button>
			<button
				className="btn btn-success"
				onClick={() => submitSurvey(formValues, history)}
			>
				Send Survey
			</button>
		</div>
	);
};

function mapStateToProps({ form }) {
	return { formValues: form.surveyForm.values };
}

export default connect(
	mapStateToProps,
	{ submitSurvey }
)(withRouter(SurveyFormReview));
