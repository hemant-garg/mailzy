import React from "react";

export default ({ input, label, meta }) => {
	return (
		<div className="survey-form--group">
			<input
				placeholder={label}
				className="survey-form--input"
				{...input}
			/>
			<div className="text-danger">{meta.touched ? meta.error : ""}</div>
		</div>
	);
};
