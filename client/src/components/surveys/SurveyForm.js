import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
	renderFields() {
		return formFields.map(({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}
	render() {
		return (
			<div className="survey-form">
				<form
					onSubmit={this.props.handleSubmit(
						this.props.onSurveySubmit
					)}
				>
					{this.renderFields()}
					<div className="survey-form--buttons">
						<Link to="/surveys">
							<button className="button-dark">Cancel</button>
						</Link>
						<button className="button-dark" type="submit">
							Next
						</button>
					</div>
				</form>
			</div>
		);
	}
}
function validate(values) {
	const errors = {};
	errors.recipients = validateEmails(values.recipients || "");

	formFields.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = `You must provide a ${name}`;
		}
	});

	return errors;
}
export default reduxForm({
	validate,
	form: "surveyForm",
	destroyOnUnmount: false
})(SurveyForm);
