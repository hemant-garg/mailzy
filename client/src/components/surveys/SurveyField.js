import React from "react";

export default ({ input, label, meta }) => {
	let inputClass = "survey-form--input"
	if(meta.touched){
		inputClass+= meta.error ? " input-error" : " input-success";
	}
	return (
		<div className="survey-form--group">
			<label className="survey-form--label">{label}</label>
			<input
				placeholder={label}
				className={inputClass}
				{...input}
			/>
			<div className="text-danger">{meta.touched ? meta.error : ""}</div>
		</div>
	);
};
