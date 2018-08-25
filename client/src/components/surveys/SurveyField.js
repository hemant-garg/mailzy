import React from "react";

export default ({ input, label, meta }) => {
	return (
		<div className="form-group">
			<label>{label}</label>
			<input className="form-control" {...input} />
			<div className="text-danger">{meta.touched ? meta.error : ""}</div>
		</div>
	);
};
