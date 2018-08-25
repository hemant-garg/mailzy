const keys = require("../../config/keys");

module.exports = survey => {
	return `
	<html><body style="text-align: center">

	<div>${survey.body}</div>
	<p>
		<a href="${keys.domainURL}/api/survey/${
		survey.id
	}/yes" style="margin-right: 10px">Yes</a>
		<a href="${keys.domainURL}/api/survey/${survey.id}/no">No</a>
	</p>

	</body></html>
	`;
};
