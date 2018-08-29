const passport = require("passport");
var cors = require("cors");

module.exports = app => {
	app.get(
		"/auth/google",
		cors(),
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);
	app.get(
		"/auth/google/callback",
		cors(),
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/surveys");
		}
	);

	app.get("/api/logout", cors(), (req, res) => {
		req.logout();
		res.redirect("/");
	});

	app.get("/api/active_user", (req, res) => {
		res.send(req.user);
	});
};
