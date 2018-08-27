const express = require("express");
const path = require("path");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/Users");
require("./models/Survey");
require("./services/passport");

mongoose.connect(
	keys.mongoURI,
	{ useNewUrlParser: true }
);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

require("./routes/googleAuth")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));

// 	const path = require("path");
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// 	});
// }

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server started :", PORT);
});
