import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/active_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post("/api/stripe", token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const checkURL = () => async dispatch => {
	const res = await axios.get("/api/check");
	console.log(res);
	dispatch({ type: "CHECK_USER", payload: res.data });
};
