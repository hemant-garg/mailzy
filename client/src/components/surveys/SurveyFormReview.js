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
				<label className="surveyFormReview--label">{label}</label> :-
				<div className="surveyFormReview--values">
					{formValues[name]}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="primary-title">Please Confirm your entries</div>
			<div className="surveyFormReview">
				{renderReview}
				<div className="survey-form--buttons">
					<button className="button-dark-4" onClick={onClickBack}>
						Back
					</button>
					<button
						className="button-dark-3"
						onClick={() => submitSurvey(formValues, history)}
					>
						Send Survey
					</button>
				</div>
			</div>
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
