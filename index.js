const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/Users");
require("./services/passport");

mongoose.connect(
	keys.mongoURI,
	{ useNewUrlParser: true }
);

const app = express();
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(express.static("client/build"));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/googleAuth")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server started :", PORT);
});
