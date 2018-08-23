const keys = require("../../config/keys");

module.exports = survey => {
	return `
	<html><body style="text-align: center">

	<div>${survey.body}</div>
	<p>
		<a href="${
			keys.domainURL
		}/api/survey/feedback/message" style="margin-right: 10px">Yes</a>
		<a href="${keys.domainURL}/api/survey/feedback/message">No</a>
	</p>

	</body></html>
	`;
};
